import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentGownBookingsResponse } from 'src/app/Models/gown';
import { GownService } from 'src/app/Services/gown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gown-bookings',
  templateUrl: './gown-bookings.component.html',
  styleUrls: ['./gown-bookings.component.scss']
})
export class GownBookingsComponent implements OnInit {
 convocationId='';
 baseUrl = environment.mainBaseUrl;
 gowns:StudentGownBookingsResponse[]=[];
  constructor(private activatedRouter:ActivatedRoute, private gownService:GownService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe({
      next:(res)=>{
        this.convocationId =res['id'];
      }
    });
    this.getBookedGowns();
  }

  getBookedGowns(){
    this.gownService.getAllBookedGowns(this.convocationId).subscribe({
     next:(response)=>{
       if(response.isSuccess){
        this.gowns= response.result;
       }
       else environment.fireErrorSwal(response.message)
     }
    })
  }
}
