import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { AddPArticipant } from 'src/app/Models/Member/add-member';
import { Employee } from 'src/app/Models/employee/employee';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { GuestService } from 'src/app/Services/guest.service';
import { MemberService } from 'src/app/Services/member.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent implements OnInit {
  EmployeeList:Employee[]=[];
  ConvocationList:Convocation[]=[];
  AddParticipantToConvo:AddPArticipant=new AddPArticipant();
  partricipantKey='';
  convationID= '';
  module=0;
  constructor(
    private Service:MemberService,
    private convocationService:ConvocationService,
    private registrationService:RegistrationService,
    private activatedRoute:ActivatedRoute,
    private guestService:GuestService,
    private router:Router

   )
    {

      this.activatedRoute.params.subscribe(paramval=>{
        this.partricipantKey=paramval['id1'];
        this.convationID=paramval['id2'];
        this.module=parseInt(paramval['item']);
    })
  }
  ngOnInit(): void {
    this.Service.getEmployees().subscribe({
      next:(SuccessResponse)=>{
        if(SuccessResponse.isSuccess){
          this.EmployeeList=SuccessResponse.result;
        }
      },
      error:(errorResponse)=>{
        if(errorResponse.error.message==HttpStatusCode.BadRequest){
          alert(errorResponse.error)
        }
      }
    })

    
    this.convocationService.getConvocationDetails().subscribe({
      next:(SuccessResponse)=>{
        if(SuccessResponse.isSuccess){
          this.ConvocationList=SuccessResponse.result;
        }
      },
      error:(errorResponse)=>{
        if(errorResponse.error.message==HttpStatusCode.BadRequest){
          alert(errorResponse.error)
        }
      }
    })

    
  }


  ngOnChanges(){
    this.guestService.ConvationKey.subscribe((response)=>{
      if(response){
        this.convationID = response;

      }
    })
  }

  AddNewParticipant(participant:AddPArticipant){    
    this.AddParticipantToConvo.entityId=this.partricipantKey;
    this.AddParticipantToConvo.convocationId=this.convationID;
    this.AddParticipantToConvo.module=this.module;
    this.registrationService.addParticipant(this.AddParticipantToConvo).subscribe({
      next:(response)=>{
        console.log(response)
        if(response.isSuccess){
          environment.fireSuccessSwal(response.message)
          this.router.navigate(['/member/convocations'])
        }
        else{
          environment.fireErrorSwal(response.message);
          this.router.navigate(['/member/convocations'])
          
        }
        
      },
      error:(err)=>{
        if(err.error.message==HttpStatusCode.Conflict){
          environment.fireErrorSwal(err.message)
        }
      }
    
  
  })
  }

}
