import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/Api/api-response';
import { Observable } from 'rxjs';
import { Employee, EmployeeResponse, UpdateEmployee } from '../Models/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) {
   }
 
 url=`${environment.baseUrl}`;

getEmployees():Observable<ApiResponse<Employee[]>>{
  return this.httpClient.get<ApiResponse<Employee[]>>(`${this.url}employee`);
}

putEmployees(employee:FormData):Observable<ApiResponse<EmployeeResponse>>{
  return this.httpClient.put<ApiResponse<EmployeeResponse>>(`${this.url}employee`,employee);
}

getEmployeeById(id:string):Observable<ApiResponse<Employee>>{
  return this.httpClient.get<ApiResponse<Employee>>(`${this.url}employee/${id}`);
} 
}
