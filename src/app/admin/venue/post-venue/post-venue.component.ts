import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Venue } from 'src/app/Models/venue/venue';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-venue',
  templateUrl: './post-venue.component.html',
  styleUrls: ['./post-venue.component.scss']
})
export class PostVenueComponent implements OnInit {

  constructor(private venueService:VenueService, private formBuilder: FormBuilder) { }
  

  myForm!: FormGroup;
  message = "";
  checkMessage = false;
  postVenue(venue:Venue) {
    this.venueService.postVenue(venue).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
          environment.fireSuccessSwal(successResponse.message)
          this.checkMessage = false;
        //  this.message = successResponse.message;
        }
        else{
          environment.fireErrorSwal(successResponse.message)
        }
      
      },
      error:(errorResponse)=>{
        this.checkMessage = true;
        this.message =errorResponse.error.message
      }
    })
  
  }

  close(){
    this.checkMessage = false;
  }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: this.formBuilder.control(""),
      totalSeats: this.formBuilder.control(""),

    })
  }
}




