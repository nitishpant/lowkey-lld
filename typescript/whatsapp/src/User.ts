export class User{
    private static nextId :number =1;
    private static userNamesTaken : string []= [];
    constructor(  username : string )
    {
        if( !User.userNamesTaken.includes(username))
        {
            this.id = User.nextId++;
            this.username = username;
            User.userNamesTaken.push(username);
        }
        else{
            throw new Error(`Username "${username}" is already taken.`);
        }
    }
    id : number;
    username : string;
    password!: string;
    encryptionKey! : string;
}