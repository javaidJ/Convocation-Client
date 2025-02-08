import { Component, OnInit } from '@angular/core';
import {  Convocation } from 'src/app/Models/Convocation/convocation';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-convocation-details',
  templateUrl: './convocation-details.component.html',
  styleUrls: ['./convocation-details.component.scss']
})
export class ConvocationDetailsComponent implements OnInit {

  constructor(private convocationService:ConvocationService) { }
  currentDate = new Date();
  convocationList:Convocation[]=[];
  convocations:Convocation[]=[];
  spinner = false;
  showcard:boolean=true;
  showTable:boolean=false;
  myBrands:any;
  ngOnInit(): void {
    this.convocationService.getConvocationDetails().subscribe({
      next:(response)=>{
        if(response.isSuccess){
         this.spinner = true;
        // this.convocationList = response.result;
         for (const con of response.result) {
          let conDate = new Date(con.convocationDate);
          if(this.currentDate <= conDate)
          {
            con.isPrevious =false;
            this.convocationList.push(con);
          }
          else{
            con.isPrevious =true;
            this.convocationList.push(con);
          }
        }
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
