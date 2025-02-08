import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistrationResponse, StudentRegistration } from '../Models/student/student';
import { ApiResponse } from '../Models/Api/api-response';
import { Observable } from 'rxjs';
import { AddPArticipant } from '../Models/Member/add-member';
import { Status } from '../Models/status';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }
  
  url=`${environment.baseUrl}Registration/`;

  postStudentRegister(id:string):Observable<ApiResponse<StudentRegistration>>{
    return this.httpClient.post<ApiResponse<StudentRegistration>>(`${this.url}student/${id}`,{})
  }
  addParticipant(participant:AddPArticipant):Observable<ApiResponse<AddPArticipant[]>>{
    return this.httpClient.post<ApiResponse<AddPArticipant[]>>(this.url+"by-admin-or-organizer",participant)
  }

  getRegistration(convocationId:string):Observable<ApiResponse<RegistrationResponse[]>>{
    return this.httpClient.get<ApiResponse<RegistrationResponse[]>>(`${this.url}all-registration/${convocationId}`)
  }
  changeregistrationStatus(model:Status):Observable<ApiResponse<Status[]>>{
    return this.httpClient.post<ApiResponse<Status[]>>(this.url+"student-update-status",model)

  }
}
