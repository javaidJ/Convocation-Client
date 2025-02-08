export class Venue {
    constructor(
        public id?:string,
        public name?:string,
        public totalSeats?:Number
    ){}
}

export class PostvenueResponse {
    constructor(
        public isSuccess:boolean,
        public message:string
    ){}
}
export class VenueResponse {
    constructor(
        public isSuccess:boolean,
        public message:string,
        
    ){}
}
export class PutVenue {
    constructor(
        public name:string,
        public totalSeats:Number,
        public id:string
       ){}
}
export class PutvenueResponse {
    constructor(
        public isSuccess:boolean,
        public message:string,
        public id:string
    ){}
}