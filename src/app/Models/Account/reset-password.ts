export class ResetPassword {
    constructor(
        public resetCode?:string,
        public newPassword?:string,
        public confrimPassword?:string,
    ){}
}

export class ForgetPassword{

       public email?:string
     
}