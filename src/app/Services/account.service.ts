import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../Models/Account/signup';
import { ChangePassword } from '../Models/Account/change-password';
import { ForgetPassword, ResetPassword } from '../Models/Account/reset-password';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/Api/api-response';
import { Login, VerifyEmail } from '../Models/Account/login';
import { LoginResponse } from '../Models/Account/loginResponse';
import { EmailResponse } from '../Models/Account/email-response';
import { AddEmployee } from '../Models/Account/add-employee';
import { AddContact, ContactResponse } from '../Models/contact-response';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }
baseUrl=`${environment.baseUrl}users`;
signup(user:Signup){
 return  this.httpClient.post<ApiResponse<Signup>>(`${this.baseUrl}/signup`,user)
}


login(user:Login){
 return  this.httpClient.post<ApiResponse<LoginResponse>>(`${this.baseUrl}/login`,user)
}

AdminSignup(user:AddEmployee){
 return  this.httpClient.post<ApiResponse<AddEmployee>>(`${this.baseUrl}/signup-user`,user)
}

emailVerification(verifyModel:VerifyEmail){
  return this.httpClient.post<ApiResponse<EmailResponse>>(`${this.baseUrl}/verifyemail`,verifyModel)
}

changePassword(changePassword:ChangePassword){
  return this.httpClient.post(`${this.baseUrl}/ChangePassword`,changePassword)
}

resendConfirmationCode():any{
  return this.httpClient.get(`${this.baseUrl}/resendConfirmationCode`)
}

forgotPassword(model:ForgetPassword):Observable<ApiResponse<ContactResponse>>{
  return this.httpClient.post<ApiResponse<ContactResponse>>(`${this.baseUrl}/forgotpassword`,model)
}

resetPassword(reset:ResetPassword):Observable<ApiResponse<ContactResponse>> {
  return this.httpClient.post<ApiResponse<ContactResponse>>(`${this.baseUrl}/resetpassword`,reset)
}


addContact(model: AddContact): Observable<ApiResponse<ContactResponse>> {
  return this.httpClient.post<ApiResponse<ContactResponse>>(
    environment.baseUrl + 'Contacts',
    model
  );
}
getContacts() {
  return this.httpClient.get<ApiResponse<ContactResponse[]>>(
    environment.baseUrl + 'Contacts'
  );
}
getContactById(id: string) {
  return this.httpClient.get<ContactResponse>(
    environment.baseUrl + `Contacts/${id}`
  );
}
deleteContact(id: string) {
  return this.httpClient.delete<ApiResponse<ContactResponse>>(environment.baseUrl + `Contacts/${id}`);
}
}