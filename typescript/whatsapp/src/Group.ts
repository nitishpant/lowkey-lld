import { User } from "./User";

export class Group{
    private static nextId = 1;
    id : number;
    name : string;
    userIds : number[];
    adminUserIds : number[];
    createdBy : User
    private usersMap: Map<number, User> = new Map();

    constructor(
        name : string,
        createdBy : User
    )
    {
        this.id = Group.nextId++;
        this.name = name;
        this.createdBy = createdBy;
        this.userIds = [this.createdBy.id];
        this.adminUserIds =[this.createdBy.id];
        this.usersMap.set(this.id, createdBy);
    }

    addUser( user : User ){
        if (!this.userIds.includes(user.id)) this.userIds.push(user.id);
    }

    removeUser( user : User ){
        this.userIds = this.userIds.filter( u => user.id!=u );
    } 

    getMembers(): number[] {
        return this.userIds;
    }

}