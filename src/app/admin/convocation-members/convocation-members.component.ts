import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-convocation-members',
  templateUrl: './convocation-members.component.html',
  styleUrls: ['./convocation-members.component.scss']
})
export class ConvocationMembersComponent implements OnInit {

  
key:string="";
constructor(private activatedRoute:ActivatedRoute,
           private service:MemberService
  ) { }

ConvocationMembers:MemberResponse[]=[]
convocationName:string=''
ngOnInit(): void {
 this.activatedRoute.params.subscribe(paramValue=>{
  this.convocationName=paramValue["name"]
  this.key=paramValue["id"]

  this.service.getMemberByConvocation(this.key).subscribe({
    next:(response)=>{
      this.ConvocationMembers=response.result;
      console.log(this.ConvocationMembers)

    },
    error:(err)=>{
      if(err.error.message==HttpStatusCode.BadRequest){
        alert("something went wrong")
      }
    }

  })
 })
}

}

