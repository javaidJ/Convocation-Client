import { Component, OnInit } from '@angular/core';
import { Convocation, ConvocationCompact } from 'src/app/Models/Convocation/convocation';
import { AdminService } from 'src/app/Services/admin.service';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { GuestService } from 'src/app/Services/guest.service';
import { MemberService } from 'src/app/Services/member.service';
import { StudentService } from 'src/app/Services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Convolength:number=0;
  currentDate = new Date();
  employeeCount=0;
  stdCount=0
  latestConvocations:ConvocationCompact[]=[];
  previousConvocations:ConvocationCompact[]=[];
  convocations:ConvocationCompact[]=[]
  constructor(private service:ConvocationService,
              private guestService:GuestService,
              private empService:AdminService,
              private stdService:StudentService,
              private memberService:MemberService
    ) { }

  ngOnInit(): void {

    this.getTotalConvocationDetails();
    // this.service.getConvocationDetails().subscribe({
    //   next:(res)=>{
    //     if(res.isSuccess){
    //       this.Convolength=res.result.length;
    //       this.convocations=res.result;
    //     }
    //   }
    // })

    // this.guestService.getAllGuests().subscribe({
    //   next:(res)=>{
    //     if(res.isSuccess){
    //       this.GuestCount=res.result.length
    //     }
    //   }
    // })

    // this.empService.getEmployees().subscribe({
    //   next:(res)=>{
    //     if(res.isSuccess){
    //       this.employeeCount=res.result.length
    //     }
    //   }
    // })

    // this.stdService.getStudents().subscribe({
    //   next:(res)=>{
    //     if(res.isSuccess){
    //       this.stdCount=res.result.length
    //     }
    //   }
    // })
  }


  // getMemberListByConvo(convoId:string){
  //   this.memberService.getMemberByConvocation(this.convoId).subscribe({
  //     next:(response)=>{
  //       this.ConvocationMembers=response.result;
  //       console.log(this.ConvocationMembers)

  //     },
  //     error:(err)=>{
  //       if(err.error.message==HttpStatusCode.BadRequest){
  //         alert("something went wrong")
  //       }
  //     }

  //   })
  //  })
  // }
 getTotalConvocationDetails(){
  this.service.getConvocationCompactDetails().subscribe({
    next:(response)=>{
      if(response.isSuccess){

        this.convocations = response.result;
        for (const con of response.result) {
          let conDate = new Date(con.convocationDate);
          if(this.currentDate <= conDate)
          {
            con.convocationDate = conDate.toString();
            this.latestConvocations.push(con);
          }
          else{
            con.convocationDate = conDate.toString();
            this.previousConvocations.push(con);
          }
        }
      }

    },
    error:(err)=>{
        environment.fireErrorSwal("There is Some Issue Please Try After Sometime");
    }
  })
 }

}
