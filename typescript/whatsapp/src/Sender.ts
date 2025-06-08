import { SenderType } from "./enum/SenderType";

export class Sender{
    type : SenderType;
    userId : number;

    constructor(
        type : SenderType,
        id : number
    )
    {
        this.type = type;
        this.userId = id;
    }
}