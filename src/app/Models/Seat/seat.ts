import { Gender, Module, ParticipantRole, SeatSection } from "src/app/Enums/enums";

export class Seat {
    public venueId!:string;
    public seatSection!:Number;
    public row!:Number;
    public seatNumber!:string;
}

export class PutSeat {

    public id!:string;
    public venueId!:string;
    public seatSection!:Number;
    public row!:Number;
    public seatNumber!:string;
}
export class SeatAllocation {

    public entityId!:string;
    public seatId!:string;
    public convocationId!:string;

}
export class SeatByVenueResponse {

    public id!:string;
    public venueId!:string;
    public seatSection!:Number;
    public seatNumber!:string;
    public row!:Number;

}


export class AllocatedSeatsResponse extends  SeatAllocation{
    public id!:string;
    public seatSection!:SeatSection;
    public seatNumber!:string;
    public row!:string;
    public name!:string;
    public contactNo!:string;
    public email!:string;
    public gender!:Gender;
    public participantRole!:number;
    public module!:Module;

}
	

