import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-member-list-by-convocation',
  templateUrl: './member-list-by-convocation.component.html',
  styleUrls: ['./member-list-by-convocation.component.scss']
})
export class MemberListByConvocationComponent implements OnInit {
  venueId='';
key:string="";
  constructor(private ActivatedRoute:ActivatedRoute,
             private service:MemberService
    ) { }

  ConvocationMembers:MemberResponse[]=[]
  convocationName:string=''
  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(paramValue=>{
    this.convocationName=paramValue["name"]
    this.key=paramValue["id"]
    this.venueId=paramValue["venueId"];

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
