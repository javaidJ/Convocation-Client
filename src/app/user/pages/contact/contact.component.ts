import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddContact } from 'src/app/Models/contact-response';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactModel:AddContact=new AddContact();
  loadSpinner=false;
  constructor(private router:Router,private service:AccountService) { }

  ngOnInit(): void {
  }

  sendQuery(){
    this.loadSpinner=true;
    this.service.addContact(this.contactModel).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.loadSpinner=false;
          environment.fireSuccessSwal("Thanks for Contacting Us.We Will Get Back to you Soon!!");
        }
      else environment.fireErrorSwal(response.message);
      this.loadSpinner=false;
      },
      error:(err)=>{
         environment.fireErrorSwal("There is some issue please try after sometime!");
         this.loadSpinner=false;
      }
    })
  }
}
