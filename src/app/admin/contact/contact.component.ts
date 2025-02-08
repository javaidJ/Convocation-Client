import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactResponse } from 'src/app/Models/contact-response';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactList:ContactResponse[]=[];

  constructor(private service:AccountService) { }

  ngOnInit(): void {
   this.contactListFunc();
  }
  contactListFunc(){
    this.service.getContacts().subscribe(response=>{
      this.contactList=response.result;
    })
  }

  deleteContact(val:string){
    environment
    .fireConfirmSwal('Are you sure You Want to Delete this Contact?')
    .then((result) => {
      if (result.isConfirmed) {
        this.service.deleteContact(val).subscribe(
          (response) => {
            if (response.isSuccess)
              environment.fireSuccessSwal(response.message);
              this.contactListFunc();
          },
          (errRes) => {
            if (
              errRes.error.statusCode === HttpStatusCode.NotFound ||
              errRes.error.statusCode === HttpStatusCode.BadRequest ||
              errRes.error.statusCode === HttpStatusCode.InternalServerError
            )
              environment.fireErrorSwal(errRes.error.message);
          }
        );
      }
    });
  }


}

