import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EditDepartment } from '../Models/department/edit-department';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/Api/api-response';
import { DepartmentResponse, postDepartment } from '../Models/department/department-response';
import { Department } from '../Models/department/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient:HttpClient) { }

  url=`${environment.baseUrl}departments`;

  postDepartment(departmentName:string):Observable<ApiResponse<postDepartment>>{
    return this.httpClient.post<ApiResponse<postDepartment>>(`${this.url}`,departmentName)
  }
 
  getDepartments():Observable<ApiResponse<Department[]>>{
    return this.httpClient.get<ApiResponse<Department[]>>(`${this.url}`)
  }

  putDepartment(department:EditDepartment):Observable<ApiResponse<DepartmentResponse>>{
    return this.httpClient.put<ApiResponse<DepartmentResponse>>(`${this.url}`,department)
  }

  deleteDepartment(id:string){
    return this.httpClient.delete(`${this.url}/${id}`)
  }
 
  getDepartmentById(id:string):Observable<ApiResponse<Department>>{
    return this.httpClient.get<ApiResponse<Department>>(`${this.url}/${id}`)
  }
}
