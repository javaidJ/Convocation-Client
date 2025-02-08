import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { EditConvocationDetails } from 'src/app/Models/Convocation/edit-convocation-details';
import { Venue } from 'src/app/Models/venue/venue';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { VenueService } from 'src/app/Services/venue.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-convocation-details',
  templateUrl: './update-convocation-details.component.html',
  styleUrls: ['./update-convocation-details.component.scss']
})
export class UpdateConvocationDetailsComponent implements OnInit {

  constructor(private convocationService:ConvocationService, private formBuilder:FormBuilder, 
    private venueService:VenueService, private router:Router, private activatedRoute:ActivatedRoute) { 
      this.activatedRoute.params.subscribe(param=>{
        this.id =param['id'];
      })
    }
    myForm!:FormGroup;
    venueList:Venue[]=[];
    convocation:Convocation = new Convocation();
    id!:string;
  
    updateConvocationDetails(form:EditConvocationDetails){
    this.convocationService.putConvocationDetails(form).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
          environment.fireSuccessSwal(successResponse.message);
         this.router.navigate(['/admin/convocationdetails'])
  
        }
      },
      error:(errorResponse)=>{
        environment.fireErrorSwal(errorResponse.member);
        
      }
    })       
  
    }
    ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id:this.formBuilder.control(this.id,),
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

    this.convocationService.getConvocationDetailsById(this.id).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
          this.convocation = successResponse.result;
        }
      },
      error:(errorResponse)=>{
        environment.fireErrorSwal(errorResponse.message);
      }

    })
    }

}
