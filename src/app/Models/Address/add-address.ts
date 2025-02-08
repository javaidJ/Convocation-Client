export class AddAddress {
    constructor(
        public country?:string,
        public state?:string,
        public city?:string,
        public postalCode?:number,
        public addressLine?:string,
        public module?:number,
        public entityId?:string

    ){}
}
