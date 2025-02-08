import { SeatSection } from "src/app/Enums/enums";
import { JobRole } from "src/app/Enums/job-role";
import { JobRolePipe } from "src/app/pipes/job-role.pipe";

export class Convocation {
    
        public id!:string;
        public isDeleted!:boolean;
        public createdOn!:string;
        public name!:string;
        public venueId!:string;
        public convocationDate!:string;
        public end!:string;
        public description!:string
        public venue?:string;
        public totalSeats?:number;
        public isPrevious?:boolean;

}
export class AddConvocationDetails {

    constructor(
        public name:string,
        public convocationDate:Date,
        public venueId:string,
        public end:string,
        public description:string,
    ){}
}



export class ConvocationWithVenue
{
    public id!:string;
    public name!:string;
    public convocationDate!:string;
    public venue!:string;
    public venueId!:string;
    public end!:string;
    public description!:string;
    public totalSeats!:number;
}

export class MemberConvocationResponse extends ConvocationWithVenue{
    public memberId!:string;
    public jobRole!:JobRole;
}

export class ConvocationCompact extends Convocation{
     totalGuests!: number
     totalStudents!: number
     totalMembers!: number
     totalParticipants!: number
}

export class StudentConvocationDetailsResponse extends ConvocationWithVenue
{
    seatSection!: SeatSection
    seatNo!: string
    row!: number
    daysLeft!: number
}