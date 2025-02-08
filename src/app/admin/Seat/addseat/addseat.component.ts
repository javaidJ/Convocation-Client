import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from 'src/app/Models/Seat/seat';
import { Venue } from 'src/app/Models/venue/venue';
import { SeatService } from 'src/app/Services/seat.service';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addseat',
  templateUrl: './addseat.component.html',
  styleUrls: ['./addseat.component.scss']
})
export class AddseatComponent implements OnInit {
key=''
  constructor(private seatService:SeatService , private formBuilder:FormBuilder,
    private ActivatedRoute:ActivatedRoute,
    private Router:Router,
     private venueService:VenueService) { 
     this.ActivatedRoute.params.subscribe(val=>{
  this.key=val['id']
})

     }

  myForm!:FormGroup;
  venueList!:Venue[];
  addSeat(seat:Seat){
    seat.venueId=this.key;
    this.seatService.postSeat(seat).subscribe({
      next:(successResponse)=>{
        environment.fireSuccessSwal(successResponse.message);
        this.Router.navigate(['/admin/seatlist',successResponse.result.venueId])
      },
      error:(errorResponse)=>{
        environment.fireSuccessSwal(errorResponse.message);
      }
    })
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      venueId: this.formBuilder.control(""),
      seatSection: this.formBuilder.control(""),
      row: this.formBuilder.control(""),
      seatNumber: this.formBuilder.control(""),
    })

    this.venueService.getVenue().subscribe({
      next:(successResponse)=>{
        this.venueList = successResponse.result;
        
      }
    })
  }



}
