import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddConvocationDetails } from 'src/app/Models/Convocation/convocation';
import { Venue } from 'src/app/Models/venue/venue';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-convocation-details',
  templateUrl: './add-convocation-details.component.html',
  styleUrls: ['./add-convocation-details.component.scss']
})
export class AddConvocationDetailsComponent implements OnInit {

  constructor(private convocationService:ConvocationService, private formBuilder:FormBuilder, 
  private venueService:VenueService, private router:Router) { }
  myForm!:FormGroup;
  venueList:Venue[]=[];
  endTime = '';

  setEnd(timeValue:string){
    this.endTime = timeValue;
    console.log(this.endTime)
  }
  addConvocationDetails(form:AddConvocationDetails){
    
    // for (const [key, value] of Object.entries(form)) {
    //   if(key =="end"){
    //     form["end"]=value+":"+"00";
    //   }
    // }
    form.end = this.endTime+':00';
    console.log(form)
  this.convocationService.postConvocationDetails(form).subscribe({
    next:(successResponse)=>{
      if(successResponse.isSuccess){
        environment.fireSuccessSwal(successResponse.message); 
       this.router.navigate(['/admin/convocationdetails'])
      }
      else   
      environment.fireErrorSwal(successResponse.message)
      
    },
    error:(errorResponse)=>{
      environment.fireErrorSwal(errorResponse.message)
    }


  })       

  }
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
    name:this.formBuilder.control('',),
    convocationDate:this.formBuilder.control('',),
    venueId:this.formBuilder.control('',),
    end:this.formBuilder.control('',),
    description:this.formBuilder.control('',),
  })
  this.venueService.getVenue().subscribe({
    next:(successResponse)=>{
      if(successResponse){
        this.venueList =successResponse.result;
      }
    },
    error:(errorResponse)=>{
      environment.fireErrorSwal(errorResponse.message);
    }
     
  })
  }

}
