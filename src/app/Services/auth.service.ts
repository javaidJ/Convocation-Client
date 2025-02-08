import { Injectable } from '@angular/core';
import { UserRole } from '../Enums/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    if(localStorage.getItem("ConvocationToken")!=null && JSON.parse(localStorage.getItem("ConvocationToken")!).UserRole==UserRole.admin){
      return true
    }
    return false
  }
}
