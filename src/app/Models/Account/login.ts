export class Login {
    constructor(
        public userName?:string,
        public password?:string,
        
    ){}
}

export class VerifyEmail{
    public confirmationCode?:string
}