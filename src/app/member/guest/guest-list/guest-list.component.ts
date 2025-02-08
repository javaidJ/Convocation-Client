import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddGuestResponse } from 'src/app/Models/Guest/add-guest';
import { GuestService } from 'src/app/Services/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  Guests:AddGuestResponse[]=[];
  key='';
  Module=3

  constructor(private service:GuestService, private ActivatedRoute:ActivatedRoute
    ) { 

      this.ActivatedRoute.params.subscribe(paramVal=>{
        this.key=paramVal["id"];
        // this.service.ConvationKey.next(this.key);
        })
    }


  ngOnInit(): void {
    this.service.getAllGuests().subscribe({
      next:(response)=>{
        if(response.isSuccess){ 
          this.Guests=response.result; 
        }
      }
    })
  }

  

}
