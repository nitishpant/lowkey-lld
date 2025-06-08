import { ReceiverType } from "./enum/ReceiverType";
import { GroupManager } from "./GroupManager";
import { Message } from "./Message";

export class Receiver {
  private static nextId = 1;
  private observers: number[] = [];
  id: number;
  type: ReceiverType;
  receiverId: number;

  constructor(type: ReceiverType, receiverId: number) {
    this.id = Receiver.nextId++;
    this.type = type;
    this.receiverId = receiverId;
    if( type == ReceiverType.USER ){
        this.observers.push(receiverId);
    }
    else if ( type == ReceiverType.GROUP ){
        const groupMembers = GroupManager.getGroupMembers(receiverId);
        this.observers.push(...groupMembers );
    }
  }
  subscribe(observer: number): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: number): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message: Message): void {
    
    for (const observer of this.observers) {
        if (message.sender.userId == observer) continue;
      console.log(`Receiver ${observer} received message: ${message.text}`);
    }
  }
}
