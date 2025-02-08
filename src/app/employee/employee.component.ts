import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggedInCredentials } from '../Models/Account/logged-in-credentials';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('container') container!: ElementRef
  @ViewChild('btnon') btnon!: ElementRef
  @ViewChild('btnoff') btnoff!: ElementRef

  localObj:LoggedInCredentials|null=new LoggedInCredentials();
  constructor(public sharedService:SharedService) { }
  ngOnInit(): void {
  this.localObj=this.sharedService.getLocalObject();
  }

  toggleOn() {
    this.container.nativeElement.classList.add('show');
    this.btnon.nativeElement.classList.add('collapse');
    this.btnoff.nativeElement.classList.remove('collapse');

  }
  toggleOff() {
    this.container.nativeElement.classList.remove('show');
    this.btnon.nativeElement.classList.remove("collapse");
    this.btnoff.nativeElement.classList.add("collapse")

  }
}
