export class EditConvocationDetails {
    constructor(
        public date:Date,
        public venue:string,
        public guestName:string,
        public guestDesignation:string,
        public totalSeats:number,
        public departemntId:string,
        public id:string,
    ){}
}
