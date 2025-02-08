import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInCredentials } from 'src/app/Models/Account/logged-in-credentials';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  localObj:LoggedInCredentials|null=new LoggedInCredentials();
  constructor(private router:Router,public sharedService:SharedService) { }
  ngOnInit(): void {
  this.localObj=this.sharedService.getLocalObject();
  }
}
