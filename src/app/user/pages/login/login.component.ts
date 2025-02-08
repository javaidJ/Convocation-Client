import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { UserRole } from 'src/app/Enums/user-role';
import { Login } from 'src/app/Models/Account/login';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: Login = new Login();
  loginBtn = true;
  loadingBtn = false

  constructor(private accountService: AccountService,
    private router: Router) { }
  @ViewChild("signIn") signIn!: ElementRef

  id!: string;

  logUser() {
    this.loginBtn = false;
    this.loadingBtn = true;
    this.accountService.login(this.userLogin).subscribe({
      next: (successResponse) => {
        if (successResponse.isSuccess) {
          this.loginBtn = true;
          this.loadingBtn = false;
          localStorage.setItem(
            'ConvocationToken',
            JSON.stringify(successResponse.result)
          );

          switch (successResponse.result.userRole) {
            case UserRole.admin:
              this.router.navigate(['/admin']);
              break;
            case UserRole.student:
              this.router.navigate(['/student']);
              break;
            case UserRole.employee:
              this.router.navigate(['/member']);
              break;
            default:
          };

        }
       
       else if(successResponse.message=="Invalid credentials")
       {
        environment.fireErrorSwal(successResponse.message)
        this.loadingBtn=false;
        this.loginBtn=true;
       }
      
       else
       this.router.navigate(['/verifyemail'])

      },


      error: (errorResponse) => {
        environment.fireErrorSwal(errorResponse.error.message);
        this.loginBtn = true;
        this.loadingBtn = false;
      }

    }
    );

  }
  ngOnInit(): void {

  }


}
