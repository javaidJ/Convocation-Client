import { Component, OnInit } from '@angular/core';
import { StudentConvocationDetailsResponse } from 'src/app/Models/Convocation/convocation';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-convocations',
  templateUrl: './my-convocations.component.html',
  styleUrls: ['./my-convocations.component.scss']
})
export class MyConvocationsComponent implements OnInit {
  convocations:StudentConvocationDetailsResponse[]=[]
  constructor(private convocationService:ConvocationService) { }

  ngOnInit(): void {
    this.getConvocations();
  }

  getConvocations(){
    
    this.convocationService.getStudentConvocations().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.convocations=response.result;
        }
        else
        environment.fireErrorSwal(response.message);
      },
      error:()=>{},
    });
  }
}
