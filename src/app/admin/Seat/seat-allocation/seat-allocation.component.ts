import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { SeatAllocation, SeatByVenueResponse } from 'src/app/Models/Seat/seat';
import { RegistrationResponse } from 'src/app/Models/student/student';
import { Venue } from 'src/app/Models/venue/venue';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { SeatAllocationService } from 'src/app/Services/seat-allocation.service';
import { SeatService } from 'src/app/Services/seat.service';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seat-allocation',
  templateUrl: './seat-allocation.component.html',
  styleUrls: ['./seat-allocation.component.scss']
})
export class SeatAllocationComponent implements OnInit {
  

  constructor(
    private formBuilder:FormBuilder, 
    private seatAlocationService:SeatAllocationService,
    private registrationService:RegistrationService,
    private seatService:SeatService,
    private venueService:VenueService,
    private convocationService:ConvocationService) { }

    myForm!:FormGroup;
    convocationId!:string;
    convocations!:Convocation[];
    registrations!:RegistrationResponse[];
    seatList!:SeatByVenueResponse[];
    venueList!:Venue[];
    registrationVenueId!:string;
    venueId!:string;
    entityId!:string;
    seatId?:string;


seatAllocate(form:SeatAllocation){
this.seatAlocationService.postSeat(form).subscribe({
  next:(successResponse)=>{
    environment.fireSuccessSwal(successResponse.message);
  },
  error:(errorResponse)=>{
    environment.fireErrorSwal(errorResponse.message);
  }
})
}
get(event:any){
  this.convocationId = event.target.value;
  this.getRegistration(this.convocationId);
}
get2(event:any){
  this.venueId = event.target.value;
  console.log(this.venueId)
}
get3(event:any){
  this.seatId = event.target.value;
  this.getSeatsByVenueId();
}

getSeatsByVenueId(){
  console.log(this.venueId)
  this.seatService.getSeatByVenueId(this.venueId).subscribe({
    next:(successResponse)=>{
      this.seatList =  successResponse.result;
    },
    error:(errorResponse)=>{
      environment.fireErrorSwal(errorResponse.message);
    }
  })
}
getRegistration(id = this.convocationId){
  this.registrationService.getRegistration(id).subscribe({
    next:(successResponse)=>{
      this.registrations = successResponse.result;
      for(let registration of this.registrations){
        this.registrationVenueId =registration.id;
        this.convocationId = registration.convocationId;
        this.entityId = registration.entityId;
      }
    }
  })
}
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
    entityId:this.formBuilder.control('',),
    seatId:this.formBuilder.control("",),
    convocationId:this.formBuilder.control("",)
  })
  this.convocationService.getConvocationDetails().subscribe({
    next:(successResponse)=>{
      this.convocations =  successResponse.result;
    },
    error:(errorResponse)=>{
      environment.fireErrorSwal(errorResponse.message);
    }
  })
 
  this.venueService.getVenue().subscribe({
    next:(successResponse)=>{
      this.venueList = successResponse.result;
    }
  });

  }

}
