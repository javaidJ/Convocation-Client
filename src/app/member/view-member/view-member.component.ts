import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {
  venueId = '';
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
    this.venueId=paramValue["venueId"];


    this.service.getMemberByConvocation(this.key).subscribe({
      next:(response)=>{
        this.ConvocationMembers=response.result;
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
