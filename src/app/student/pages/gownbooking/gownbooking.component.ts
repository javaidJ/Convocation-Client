import { Component, OnInit } from '@angular/core';
import { GownBookingResponse, GownResponse } from 'src/app/Models/gown';
import { GownService } from 'src/app/Services/gown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gownbooking',
  templateUrl: './gownbooking.component.html',
  styleUrls: ['./gownbooking.component.scss']
})
export class GownbookingComponent implements OnInit {
 gown!:GownBookingResponse;
 baseUrl=environment.mainBaseUrl;
  constructor(private gownService:GownService) { }

  ngOnInit(): void {
    this.getMyGown()
  }


  getMyGown()
  {
    this.gownService.getMyGowns().subscribe({
      next:(response)=>{
        if(response.isSuccess){

          this.gown= response.result;
          console.log(this.gown)

        }
        else
           environment.fireErrorSwal(response.message);
      },
      error:()=>{
        environment.fireErrorSwal("There is some issue please try after sometime!");
      }
    })
  }
}
