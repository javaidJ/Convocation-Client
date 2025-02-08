import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeatAllocation, SeatByVenueResponse } from 'src/app/Models/Seat/seat';
import { SeatService } from 'src/app/Services/seat.service';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-seatlistbyvenue',
  templateUrl: './seatlistbyvenue.component.html',
  styleUrls: ['./seatlistbyvenue.component.scss']
})
export class SeatlistbyvenueComponent implements OnInit {
  convoId='';
  venueId='';
  participantId=''
  venueName:any

  seatList:SeatByVenueResponse[]=[]
  seatModel:SeatAllocation=new SeatAllocation();
  constructor(private ActivateRoute:ActivatedRoute,
              private SeatService:SeatService,
              private venueService:VenueService
    ) { 

 
  }
  

  ngOnInit(): void {

    this.ActivateRoute.params.subscribe(paramVal=>{
      this.convoId=paramVal['id'];
     this.venueId=paramVal['venueId'];
     this.participantId=paramVal['participantId']
     
    })

   this.SeatService.getSeatByVenueId(this.venueId).subscribe({
    next:(response)=>{
      if(response.isSuccess){
        this.seatList=response.result;
        console.log(this.seatList);
        
      }
    }
   })

   this.venueService.getVenueById(this.venueId).subscribe({
     next:(res)=>{
      if(res.isSuccess){
        this.venueName=res.result.name
      }
    }
   })

  }

  AllocateSeat(id:any){
    this.seatModel.convocationId=this.convoId;
    this.seatModel.entityId=this.participantId;
    this.seatModel.seatId=id;

    this.SeatService.AllocateSeat(this.seatModel).subscribe({
      next:(res)=>{
        if(res.isSuccess){
          environment.fireSuccessSwal(res.message)
        }
        else{
          environment.fireErrorSwal(res.message)
        }
      }
    })
  }
  


}
