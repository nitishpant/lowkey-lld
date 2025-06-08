import { Message } from "./Message";
import { Receiver } from "./Receiver";

export class MessageManager {
  private messageQueue: Message[] = [];

  send(message: Message) {
    console.log(`MessageManager: Enqueuing message "${message.text}"`);
    this.messageQueue.push(message);
    message.isSent =true;
  }

  processQueue() {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift()!;
      message.receiver.notify(message);
      message.isDelivered = true;
    }
  }

  
}
