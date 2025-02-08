import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VerifyEmail } from 'src/app/Models/Account/login';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  loadSpinner = false
  verifyEmailModel:VerifyEmail=new VerifyEmail();
  
  constructor(private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resendCode() {
    this.accountService.resendConfirmationCode().subscribe({
      next: (res: any) => {
        environment.fireSuccessSwal(res.message)

      },
      error: (err: any) => {
        environment.fireErrorSwal(err.message)
      }
    })
  }

  verifyEmail() {
    this.loadSpinner = true;
    this.accountService.emailVerification(this.verifyEmailModel).subscribe({
      next: (response) => {
        console.log(response);

        environment.fireSuccessSwal(response.message)
        this.loadSpinner = false
        this.router.navigate(['/login'])
      },
      error: (err) => {
        environment.fireErrorSwal(err.message)
        this.loadSpinner = false
      }
    })


  }
}
