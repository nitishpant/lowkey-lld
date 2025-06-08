import { MessageType } from "./enum/MessageType";
import { ReceiverType } from "./enum/ReceiverType";
import { SenderType } from "./enum/SenderType";
import { Group } from "./Group";
import { GroupManager } from "./GroupManager";
import { Message } from "./Message";
import { MessageManager } from "./MessageManager";
import { Receiver } from "./Receiver";
import { Sender } from "./Sender";
import { User } from "./User";

export class MessagingService {
    
    private messageManager = new MessageManager();

    public runService() { 
    const user1 = new User("ntsh");
    const user2 = new User("elonMusk");
    const user3 = new User("donaldtrump");

    const group1 = new Group("presidential", user1);
    GroupManager.addGroup(group1);
    group1.addUser(user2);
    group1.addUser(user3);

    const groupReceiver = new Receiver(ReceiverType.GROUP, group1.id);

    const sender1 = new Sender(SenderType.USER, user1.id);
    const receiver1 = new Receiver(ReceiverType.USER, user2.id);

    const message1 = new Message(sender1, receiver1, "This is the first message to elon only", MessageType.TEXT);

    
    const message2 = new Message(sender1, groupReceiver, "This is a message to presidential group", MessageType.TEXT);

    this.messageManager.send(message1);
    this.messageManager.send(message2);

    this.messageManager.processQueue();
  }
}
