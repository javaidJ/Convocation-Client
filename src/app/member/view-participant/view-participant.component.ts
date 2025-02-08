import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-view-participant',
  templateUrl: './view-participant.component.html',
  styleUrls: ['./view-participant.component.scss']
})
export class ViewParticipantComponent implements OnInit {

 
  key:string="";
  venueId="";
  constructor(private activatedRoute:ActivatedRoute,
             private service:MemberService
    ) { }

  ConvocationParticipants:MemberResponse[]=[]
  convocationName:string=''

  ngOnInit(): void {
    // const name = this.ActivatedRoute.snapshot.paramMap.get('name');
   this.activatedRoute.params.subscribe(paramValue=>{
    this.convocationName=paramValue["name"]
    this.key=paramValue["id"];
    this.venueId=paramValue["venueId"];


    this.service.getParticipantByConvo(this.key).subscribe({
      next:(response)=>{
        this.ConvocationParticipants=response.result;
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
