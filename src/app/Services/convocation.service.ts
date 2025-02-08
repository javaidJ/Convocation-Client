import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EditConvocationDetails } from '../Models/Convocation/edit-convocation-details';
import { ApiResponse } from '../Models/Api/api-response';
import { Observable } from 'rxjs';
import { AddConvocationDetails, Convocation, ConvocationCompact, MemberConvocationResponse, StudentConvocationDetailsResponse } from '../Models/Convocation/convocation';

@Injectable({
  providedIn: 'root'
})
export class ConvocationService {

  constructor(private httpClient:HttpClient) { }

  url= `${environment.baseUrl}convocation`;

  postConvocationDetails(convocationDetails:AddConvocationDetails):Observable<ApiResponse<AddConvocationDetails>>{
  return this.httpClient.post<ApiResponse<AddConvocationDetails>>(`${this.url}`,convocationDetails)
  }

  getConvocationDetails():Observable<ApiResponse<Convocation[]>>{
    return this.httpClient.get<ApiResponse<Convocation[]>>(`${this.url}`)
  }

  getConvocationCompactDetails():Observable<ApiResponse<ConvocationCompact[]>>{
    return this.httpClient.get<ApiResponse<ConvocationCompact[]>>(`${this.url}/compact-convocation`)
  }


  getStudentConvocations():Observable<ApiResponse<StudentConvocationDetailsResponse[]>>{
    return this.httpClient.get<ApiResponse<StudentConvocationDetailsResponse[]>>(`${this.url}/my-convocation`)
  }
  
  getAllMemberConvocation():Observable<ApiResponse<MemberConvocationResponse[]>>{
    return this.httpClient.get<ApiResponse<MemberConvocationResponse[]>>(`${this.url}/member-convocations`)
  }


  putConvocationDetails(convocationDetails:EditConvocationDetails):Observable<ApiResponse<EditConvocationDetails>>{
    return this.httpClient.put<ApiResponse<EditConvocationDetails>>(`${this.url}`,convocationDetails)
  }
 
  deleteConvocationDetails(id:string){
    return this.httpClient.delete(`${this.url}${id}`)
  }

  getConvocationDetailsById(id:string):Observable<ApiResponse<Convocation>>{
    return this.httpClient.get<ApiResponse<Convocation>>(`${this.url}/${id}`)
  }

  getConvocationDetailsByDepartmentId(id:string){
    return this.httpClient.get(`${this.url}/departmentid/${id}`)
  }
}
