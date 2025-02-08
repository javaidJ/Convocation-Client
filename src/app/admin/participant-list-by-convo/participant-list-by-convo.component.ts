import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberResponse } from 'src/app/Models/Member/add-member';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-participant-list-by-convo',
  templateUrl: './participant-list-by-convo.component.html',
  styleUrls: ['./participant-list-by-convo.component.scss']
})
export class ParticipantListByConvoComponent implements OnInit {
  currentDate = new Date();
  key:string="";
  venueId="";
  constructor(private ActivatedRoute:ActivatedRoute,
             private service:MemberService
    ) { }

  ConvocationParticipants:MemberResponse[]=[]
  convocationName:string=''

  ngOnInit(): void {
    // const name = this.ActivatedRoute.snapshot.paramMap.get('name');
   this.ActivatedRoute.params.subscribe(paramValue=>{
    this.convocationName=paramValue["name"]
    this.key=paramValue["id"];
    this.venueId=paramValue["venueId"];


    this.service.getParticipantByConvo(this.key).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          for (const con of response.result) {
            let conDate = new Date(con.convocationDate?.toString());
            if(this.currentDate <= conDate)
            {
              con.convocationDate = conDate.toString();
              this.ConvocationParticipants.push(con);
            }
            else{
              con.convocationDate = conDate.toString();
              this.ConvocationParticipants.push(con);
            }
          }

          this.ConvocationParticipants=response.result;
        }
      
       

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
