import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PendingRegistration } from 'src/app/Models/Member/add-member';
import { Status } from 'src/app/Models/status';
import { MemberService } from 'src/app/Services/member.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pending-registration',
  templateUrl: './pending-registration.component.html',
  styleUrls: ['./pending-registration.component.scss']
})
export class PendingRegistrationComponent implements OnInit {
  key = ''
  constructor(private service: MemberService,
    private ActivatedRoute: ActivatedRoute,
    private registrationService: RegistrationService
  ) {
    this.ActivatedRoute.params.subscribe(paramVal => {
      this.key = paramVal['id']
    })
  }

  color1 = "btn btn-outline-success";
  color3 = "btn btn-outline-primary"

  showSelctDropDown = true;
  dontShowDropdown = false;
  stdList: PendingRegistration[] = [];
  changeStatus: Status = new Status();

  ngOnInit(): void {
    this.getPendingRegistrations();
  }

 getPendingRegistrations(){
  this.service.getPendingRegistration(this.key).subscribe({
    next: (response) => {
      if (response.isSuccess) {
        this.stdList = response.result;
      }
      else {
          environment.fireErrorSwal("No Requests Found")

      }
    },
    error: (err) => {
      if (err.error.message == HttpStatusCode.InternalServerError) {
        environment.fireErrorSwal(err.message)
      }
    }
  })
 }

  changeRegistrationStatus(convoId: string, stdId: string) {
    this.changeStatus.convocationId = convoId;
    this.changeStatus.studentId = stdId;
    this.registrationService.changeregistrationStatus(this.changeStatus).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          environment.fireSuccessSwal(response.message);
          this.getPendingRegistrations();
        }
        else {
          environment.fireErrorSwal(response.message)
        }
      }
    })
  }


}
