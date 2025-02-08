export class ContactResponse {
        id!: string;
        createdOn!: string;
        name!: string;
        email!: string;
        phoneNumber!: string
        message!: string
}


export class AddContact {
        public name?:string;
        public email?:string;
        public phoneNumber?:string;
        public message?:string
    
    }
    