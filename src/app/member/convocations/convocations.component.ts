import { Component, OnInit } from '@angular/core';
import { Convocation, MemberConvocationResponse } from 'src/app/Models/Convocation/convocation';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-convocations',
  templateUrl: './convocations.component.html',
  styleUrls: ['./convocations.component.scss']
})
export class ConvocationsComponent implements OnInit {

  
  constructor(private convocationService:ConvocationService) { }

  convocationList:MemberConvocationResponse[]=[];
  spinner = false;
  showcard:boolean=true;
  showTable:boolean=false;
  myBrands:any;
  ngOnInit(): void {
    this.convocationService.getAllMemberConvocation().subscribe({
      next:(sucessResponse)=>{
        if(sucessResponse.isSuccess){
         this.spinner = true;
         this.convocationList = sucessResponse.result;
        console.log(this.convocationList)
        }
      },
      error:(errorResponse)=>{
        environment.fireErrorSwal(errorResponse.message) ;
      }
    });
    this.spinner = false;
  }

}
