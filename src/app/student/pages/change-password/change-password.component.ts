import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from 'src/app/Models/Account/change-password';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  passwordModel: ChangePassword = new ChangePassword()
  authtoken = ''
  loadSpinner=false
  constructor(private service: AccountService,
    private Router: Router
  ) { }

  ngOnInit(): void {

  }

  changePassword() {
    this.loadSpinner=true
    this.service.changePassword(this.passwordModel).subscribe({
      next: (res) => {
        environment.fireSuccessSwal("Password changed Successfully")
        this.Router.navigate(['/student'])
        this.loadSpinner=false;
      },
      error: (err) => {
        environment.fireErrorSwal(err.message)
        this.loadSpinner=false
      }
    })
  }

}
