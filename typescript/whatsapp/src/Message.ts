import { MessageType } from "./enum/MessageType";
import { Receiver } from "./Receiver";
import { Sender } from "./Sender";

export class Message{
    private static nextId : number = 1;
    id? : number;
    sender! : Sender;
    receiver! : Receiver;
    type!: MessageType;
    isSent! : boolean;
    isDelivered! : boolean;
    text! : string;
    attachment? : string;

    constructor(
        sender : Sender, 
        receiver : Receiver,
        text : string,
        type : MessageType,
        attacment? : string
    ){
        this.id = Message.nextId++;
        this.isSent = false;
        this.isDelivered = false;
        this.text = text;
        this.type = type;
        this.attachment = attacment;
        this.sender = sender;
        this.receiver = receiver; 
    }

}