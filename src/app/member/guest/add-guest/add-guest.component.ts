import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddGuest } from 'src/app/Models/Guest/add-guest';
import { GuestService } from 'src/app/Services/guest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {

  AddGuest:AddGuest=new AddGuest();
  convocationId='';
  participantId='';

  constructor(private service:GuestService  ) 

    {
    
     }

  ngOnInit(): void {
  }

  AddNewGuest(form:AddGuest){
    
  this.service.AddGuest(form).subscribe({
    next:(response)=>{
      if(response.isSuccess){
        environment.fireSuccessSwal(response.message)
      }
      else{
        environment.fireErrorSwal(response.message)
      }
    },
    error:(err)=>{
      if(err.error.message==HttpStatusCode.Conflict){
        alert("Something Went wrong")
      }
    }
  })
  }

}
