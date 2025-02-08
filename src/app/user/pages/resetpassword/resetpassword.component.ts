import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPassword } from 'src/app/Models/Account/reset-password';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  forgotPasswordModel: ForgetPassword = new ForgetPassword();
  loadSpinner = false;
  constructor(private accountService: AccountService,
              private router:Router          
    ) { }

  ngOnInit(): void {
  }

  sendMail() {
    this.loadSpinner = true;
    this.accountService.forgotPassword(this.forgotPasswordModel).subscribe({
      next: (res) => {
        environment.fireSuccessSwal(res.message)
        this.loadSpinner = false
        this.router.navigate(['/forgetpassword'])
        

      },
      error: (err) => {
        environment.fireErrorSwal(err.message)
        this.loadSpinner = false

      }
    })
  }

}
