import { Gender } from "src/app/Enums/enums";

export class AddGuest {
    public id!:string;
    public name!:string;
    public designation!:string;
    public gender!:number;
    public email!:string;
    public contactNo!:string;
    // public participantRole!:number;
    public guestArrivedFrom!:string;
    public isOutSider!:boolean;
    public description!:string;
    


}

export class AddGown {
    public createdOn!:string;
    public id!:string;
    public filePath!:string;
    public color!:string;
    public quantity!:number;
    public size!:number;
    public charges!:number;
    public Files!:FileList;

}

export class AddGuestResponse{
    public id!:string;
    public createdOn!:string;
    public name!:string;
    public gender!:number;
    public email!:string;
    public contactNo!:string;
    public entityId!:string;
    public module!:number;
    public participantRole!:number;
    public convocationId!:string;

}

export class AddGuestToConvocation{
    public entityId!:string;
    public module!:number;
    public participantRole:number=100
    public convocationId!:string;

}

export class GuestResponse{
    public id!:string;
    public createdOn!:string;
    public name!:string;
    public gender!:Gender;
    public email!:string;
    public contactNo!:string;
    public entityId!:string;
    public module!:number;
    public participantRole!:number;
    public convocationId!:string;
    public designation?:string;
    public guestArrivedFrom?:string;
    public isOutSider?:boolean;
    public description?:string;
}
