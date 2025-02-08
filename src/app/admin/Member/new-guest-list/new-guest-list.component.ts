import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module, participantRole } from 'src/app/Enums/user-role';
import { AddGuest, AddGuestResponse, AddGuestToConvocation } from 'src/app/Models/Guest/add-guest';
import { GuestService } from 'src/app/Services/guest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-guest-list',
  templateUrl: './new-guest-list.component.html',
  styleUrls: ['./new-guest-list.component.scss']
})
export class NewGuestListComponent implements OnInit {
  convocationId='';
  Module=3;
  constructor(private service:GuestService,
    private ActivatedRoute:ActivatedRoute,
    private Router:Router
    )
     {
      this.ActivatedRoute.params.subscribe(paramVal=>{
        this.convocationId=paramVal['id']
      })
     }

  Guests:AddGuestResponse[]=[];
  AddConvocationGuest:AddGuestToConvocation=new AddGuestToConvocation();

  ngOnInit(): void {
    this.service.getAllGuests().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.Guests=response.result
          console.log(this.Guests);
          
        }
      }
    })
  }

  // AddGuestToConvocation(guestId:string){  
  //   this.AddConvocationGuest.convocationId=this.convocationId;
  //   this.AddConvocationGuest.entityId=guestId;
  //   this.AddConvocationGuest.module=Module.Guest;
  //   this.service.AddGuestToConvocation(this.AddConvocationGuest).subscribe({
  //     next:(response)=>{
  //       if(response.isSuccess){
  //         environment.fireSuccessSwal(response.message)
  //         this.Router.navigate(['/admin/memberList'])
  //       }
  //       else{
  //       environment.fireErrorSwal(response.message)
          
  //       }
  //     }
  //   })
  // }

}
