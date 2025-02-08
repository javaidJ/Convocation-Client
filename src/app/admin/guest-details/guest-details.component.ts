import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestResponse } from 'src/app/Models/Guest/add-guest';
import { GuestService } from 'src/app/Services/guest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss']
})
export class GuestDetailsComponent implements OnInit {
 id!:string;
 guest!:GuestResponse;
  constructor(private activatedRoute:ActivatedRoute, private guestService:GuestService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(response)=>{
        this.id=response['id'];
      }
    });
    this.getGuestDetails();
  }


  getGuestDetails(){
    this.guestService.getGuestDetails(this.id).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.guest=response.result;
        }
        else
         environment.fireErrorSwal(response.message)
      },
      error:(err)=>{},
    })

  }
}
