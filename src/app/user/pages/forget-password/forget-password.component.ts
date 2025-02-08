import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPassword } from 'src/app/Models/Account/reset-password';
import { AccountService } from 'src/app/Services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  loadSpinner=false
  constructor(private accountService:AccountService,
              private router:Router
    ) { }
  resetPasswordModel:ResetPassword=new ResetPassword();

  ngOnInit(): void {
  }

  resetPassword(){
    this.loadSpinner=true;
    this.accountService.resetPassword(this.resetPasswordModel).subscribe({
      next:(response)=>{
        environment.fireSuccessSwal(response.message)
        this.loadSpinner=false;
        this.router.navigate(['/login'])
        
        
      },
      error:(err)=>{
        environment.fireErrorSwal(err.message)
      }
    })
  }
}
