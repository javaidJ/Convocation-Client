export class AddMember {
    constructor(
        public entityId?:string,
        public module?:number,
        public jobRole:number=100,
        public convocationId?:string

    ){}
}
export class AddPArticipant {
    constructor(
        public entityId?:string,
        public module:number=9,
        public participantRole:number=100,
        public convocationId:string=""

    ){}
}
export class MemberResponse {
    convocationDate:string='';
    daysLeft:number=0
  
        public id?:string;
        public name?:string;
        public gender?:string;
        public email?:string;
        public contactNo?:string;
        public entityId?:string;
        public module?:number;
        public jobRole?:number;
        public convocationId?:string;
        public participantRole?:string;
       
constructor(){

}

    
    
}
export class PendingRegistration {
    constructor(
        public registrationStatus?:number,
        public id?:string,
        public name?:string,
        public gender?:string,
        public email?:string,
        public contactNo?:string,
        public entityId?:string,
        public module?:number,
        public jobRole?:number,
        public convocationId?:string,
        public participantRole?:string

    ){}
}
