export class LoginResponse {
    constructor(
        public userName:string,
        public token:string,
        public userRole:number,
        public isEmailVerified : boolean
    ){}
}

