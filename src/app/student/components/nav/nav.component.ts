import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInCredentials } from 'src/app/Models/Account/logged-in-credentials';
import { SharedService } from 'src/app/Services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  localObj:LoggedInCredentials|null=new LoggedInCredentials();
loggedInUsername=''
  constructor(public SharedService:SharedService,
              private Router:Router
        
    ) { }

  ngOnInit(): void {
   this.loggedInUsername=JSON.parse(localStorage.getItem("ConvocationToken")!).userName
   this.localObj=this.SharedService.getLocalObject();
  }

  logOut(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("ConvocationToken")
        this.Router.navigate(['/login'])
      }
    });

}}

