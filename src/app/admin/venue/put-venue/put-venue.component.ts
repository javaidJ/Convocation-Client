import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PutVenue, Venue } from 'src/app/Models/venue/venue';
import { VenueService } from 'src/app/Services/venue.service';

@Component({
  selector: 'app-put-venue',
  templateUrl: './put-venue.component.html',
  styleUrls: ['./put-venue.component.scss']
})
export class PutVenueComponent implements OnInit {

  constructor(private venueService: VenueService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id']
    });
  }
  id!: string;
  myForm!: FormGroup;
  venue: Venue = new Venue();
  message:string ="";

  updateVenue(venue: PutVenue) {
    this.venueService.putVenue(venue).subscribe({
      next:(successResponse)=>{
       if(successResponse.isSuccess) {
        this.message = successResponse.message;
        console.log(this.message);
         this.router.navigate(['/admin/venue']);
       }
      },
      error:(errorResponse)=>{
        this.message = errorResponse.message;
        console.log(this.message);
      }
    })
  }

  ngOnInit() {
    this.venueService.getVenueById(this.id).subscribe({
      next:(successResponse)=>{
         if(successResponse.isSuccess){
          this.venue = successResponse.result;
          this.message = successResponse.message;
         console.log(this.message);
  
         }
      },
      error:(errorResponse)=>{
        this.message =errorResponse.error;
        console.log(this.message);
      }
     })
     this.myForm = this.formBuilder.group({
      id: this.formBuilder.control(this.id, []),
      name: this.formBuilder.control(this.venue.name, []),
      totalSeats: this.formBuilder.control(this.venue.totalSeats, []),
    })
  

  }

 

}
