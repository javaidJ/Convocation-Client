import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-convocation-list',
  templateUrl: './convocation-list.component.html',
  styleUrls: ['./convocation-list.component.scss']
})
export class ConvocationListComponent implements OnInit {
currentDate = new Date();
convocations:Convocation[] = [];
  constructor(private convocationService:ConvocationService, 
      private registrationService:RegistrationService, private router:Router) { }
   convocationList:Convocation[]=[];
   myBrands:any
   showcard:boolean=true;
   showTable:boolean=false;
   
   postStudentRegistration(id:string){
    this.registrationService.postStudentRegister(id).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          environment.fireSuccessSwal(response.message);
          this.router.navigate([`/student/gownlist/${id}`])
        }
      else
      environment.fireErrorSwal(response.message)
      },
      error:(errorResponse)=>{
        environment.fireErrorSwal("There is some issue Please try after sometime");
      }
    })
   }

   ngOnInit(): void {
    this.convocationService.getConvocationDetails().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          for (const con of response.result) {
            let conDate = new Date(con.convocationDate);
            if(this.currentDate < conDate)
            {
              console.log(conDate);
              con.convocationDate = conDate.toString();
              this.convocations.push(con);
            }
          }
        }
      },
      error:(errorResponse)=>{
       environment.fireErrorSwal(errorResponse.message);
      }
    })
  }


}
