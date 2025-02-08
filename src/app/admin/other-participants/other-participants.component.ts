import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-other-participants',
  templateUrl: './other-participants.component.html',
  styleUrls: ['./other-participants.component.scss']
})
export class OtherParticipantsComponent implements OnInit {

  id:string="";
  participantRole='';
  constructor(private activatedRoute:ActivatedRoute,
             private service:MemberService
    ) { }

  ConvocationParticipants:MemberResponse[]=[]
  convocationName:string=''

  ngOnInit(): void {
    // const name = this.ActivatedRoute.snapshot.paramMap.get('name');
   this.activatedRoute.params.subscribe(paramValue=>{
    this.convocationName=paramValue["name"]
    this.id=paramValue["id"];
    this.service.getParticipantByConvo(this.id).subscribe({
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

