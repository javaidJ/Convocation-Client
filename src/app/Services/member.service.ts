import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/Api/api-response';
import { Employee } from '../Models/employee/employee';
import { environment } from 'src/environments/environment';
import { AddMember, MemberResponse, PendingRegistration } from '../Models/Member/add-member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


 url=`${environment.baseUrl}`;


  constructor(private httpClient:HttpClient) { }

  getEmployees():Observable<ApiResponse<Employee[]>>{
    return this.httpClient.get<ApiResponse<Employee[]>>(`${this.url}employee`);
  }
  
  addMember(member:AddMember):Observable<ApiResponse<AddMember[]>>{
    return this.httpClient.post<ApiResponse<AddMember[]>>(this.url+"Member",member)
  }

  getMemberByConvocation(id:string):Observable<ApiResponse<MemberResponse[]>>{
    return this.httpClient.get<ApiResponse<MemberResponse[]>>(this.url+"Member/convocation/"+id)
  }
  getParticipantByConvo(id:string):Observable<ApiResponse<MemberResponse[]>>{
  return this.httpClient.get<ApiResponse<MemberResponse[]>>(this.url+"Registration/all-registration/"+id)
  }
  
  getPendingRegistration(id:string):Observable<ApiResponse<PendingRegistration[]>>{
    return this.httpClient.get<ApiResponse<PendingRegistration[]>>(this.url+"Registration/all-pending-student-registrations/"+id)
    }

    getParticipantDetails(entityId:string,role:number):Observable<ApiResponse<PendingRegistration[]>>{
      return this.httpClient.get<ApiResponse<PendingRegistration[]>>(this.url+"Registration/all-pending-student-registrations/"+entityId)
      }



}
