import { Gender, Position } from "src/app/Enums/enums";

export class StudentRegistration {
   public id!:string;
   public createdOn!:string;
   public name!:string;
   public gender!:Number;
   public email!:string;
   public contactNo!:string;
   public entityId!:string;
   public module!:Number;
   public participantRole!:Number;
   public convocationId!:string;
}

export class RegistrationResponse {
    public id!:string;
    public createdOn!:string;
    public name!:string;
    public gender!:Gender;
    public email!:string;
    public contactNo!:string;
    public entityId!:string;
    public module!:Number;
    public participantRole!:Number;
    public convocationId!:string;
 }
export class ChangeRegistrationStatus {
    constructor(
        public studentId:string,
        public registrationStatus:number,
    ){}
}
export class EditStudnet {
    constructor(
        public id:string,
        public regNumber:string,
        public email:string,
        public contactNo1:string,
        public contactNo2:string,
        public file:string,
        public name:string,
        public percentage:string,
        public position:number,
    ){}
}
export class CreateStudnet {
    constructor(
        public regNumber:string,
        public email:string,
        public contactNo1:string,
        public contactNo2:string,
        public file:string,
        public filePath:string,
        public name:string,
        public percentage:string,
        public position:number,
    ){}
}

export class Student {
    constructor(
        public id:string,
        public name:string,
        public regNumber:string,
        public email:string,
        public contactNo:string,
        public gender:Gender,
        public parentage:string,
        public departemntId:string,
        public course:Number,
        public batch:Number,
        public percentage:Number,
        public position:Position,
        public file:string,
        public filePath:string,
        public departmentName:string,
        public isDeleted:boolean,
    ){}
}

