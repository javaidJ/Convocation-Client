import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeatByVenueResponse } from 'src/app/Models/Seat/seat';
import { SeatService } from 'src/app/Services/seat.service';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.scss']
})
export class SeatListComponent implements OnInit {
  convocationList:any
  key=''
  seatList:SeatByVenueResponse[]=[];
  constructor(private ActivatedRoute:ActivatedRoute,
              private seatService:SeatService
    ) { 

    this.ActivatedRoute.params.subscribe(paraval=>{
      this.key=paraval['id']
    })
  }

  ngOnInit(): void {
    this.seatService.getSeatByVenueId(this.key).subscribe({
      next:(response)=>{
        if(response.isSuccess){
        this.seatList=response.result;
        }
       
      }
    })
  }

}
