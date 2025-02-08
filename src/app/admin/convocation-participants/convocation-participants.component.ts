import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { Student } from 'src/app/Models/student/student';
import { MemberService } from 'src/app/Services/member.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-convocation-participants',
  templateUrl: './convocation-participants.component.html',
  styleUrls: ['./convocation-participants.component.scss']
})
export class ConvocationParticipantsComponent implements OnInit {


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
    this.participantRole=paramValue["role"];


    this.service.getParticipantByConvo(this.id).subscribe({
      next:(response)=>{
        this.ConvocationParticipants=response.result;
        console.log(this.ConvocationParticipants)

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

