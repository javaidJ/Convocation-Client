import { Component, OnInit } from '@angular/core';
import { Venue } from 'src/app/Models/venue/venue';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-venue',
  templateUrl: './get-venue.component.html',
  styleUrls: ['./get-venue.component.scss']
})
export class GetVenueComponent implements OnInit {

  constructor(public venueService:VenueService) { }
  venueList:Venue[] =[];
  spinner = true;
  message :string ="";
  ngOnInit(): void {

 this.venueService.getVenue().subscribe({
  
  next:(successResponse)=>{
    console.log(successResponse)

    if(successResponse.isSuccess){
      this.venueList = successResponse.result;
      
      this.spinner=false;
    }
    else{
      environment.fireErrorSwal(successResponse.message)
      this.spinner=false;
    }
    },
  error:(errorResponse)=>{
    environment.fireErrorSwal(errorResponse.message)
  } })
  
}
}

