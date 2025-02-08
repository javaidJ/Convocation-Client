import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/Enums/user-role';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { AddMember } from 'src/app/Models/Member/add-member';
import { Employee } from 'src/app/Models/employee/employee';
import { AdminService } from 'src/app/Services/admin.service';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { MemberService } from 'src/app/Services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  EmployeeList:Employee[]=[];
  ConvocationList:Convocation[]=[];
  AddMembertoConvo:AddMember=new AddMember();
  memberKey='';
  convationID=''
  module=0;

  constructor(private Service:MemberService,
    private convocationService:ConvocationService,
    private Router:Router,
    private ActivatedRoute:ActivatedRoute
    ) { 

      // this.ActivatedRoute.params.subscribe(paramval=>{
      //   this.key=paramval['id'];
      
      // })
      this.ActivatedRoute.params.subscribe(paramval=>{
        this.memberKey=paramval['id1'];
        this.convationID=paramval['id2'];
        this.module=parseInt(paramval['item'])
        
        
        
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

  AddnewMember(member:AddMember){
    this.AddMembertoConvo.entityId=this.memberKey;
    this.AddMembertoConvo.convocationId=this.convationID;
     this.AddMembertoConvo.module=this.module
    this.Service.addMember(this.AddMembertoConvo).subscribe({
      next:(response)=>{
        console.log(response)
        if(response.isSuccess){
          environment.fireSuccessSwal(response.message)
            this.Router.navigate(['/admin/convocationdetails'])
            
        }
        else{
          environment.fireErrorSwal(response.message);
          this.Router.navigate(['/admin/convocationdetails'])


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


  




