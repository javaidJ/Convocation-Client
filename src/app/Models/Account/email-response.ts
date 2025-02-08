export class EmailResponse {
    constructor(
        public id:string,
        public userName:string,
        public email:string,
        public contactNo:string,
        public gender:number,
        public userRole:number,
        public isEmailVerified:boolean,

    ){

    }
}
