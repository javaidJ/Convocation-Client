import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedInCredentials } from '../Models/Account/logged-in-credentials';
import { Router } from '@angular/router';
import { UserRole } from '../Enums/user-role';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  getToken(): string {
    return localStorage.getItem('ConvocationToken')
      ? JSON.parse(localStorage['ConvocationToken']).token
      : '';
  }

  getLocalObject(): LoggedInCredentials | null {
    return localStorage.getItem('ConvocationToken')
      ? JSON.parse(localStorage['ConvocationToken'])
      : null;
  }

  isUserAuthenticated(role: UserRole): boolean {
    if (
      this.getLocalObject() &&
      this.getLocalObject()?.token &&
      this.getLocalObject()?.userRole == role
    ) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  logOut() {
    environment
      .fireConfirmSwal('Are you sure you want to Logout?')
      .then((res) => {
        if (res.isConfirmed) {
          localStorage.removeItem('ConvocationToken');
          this.router.navigate(['/login']);
        }
      });
  }

}
