import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EditStudnet } from '../Models/student/student';
import { ApiResponse } from '../Models/Api/api-response';
import { Student } from '../Models/student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  url=`${environment.baseUrl}students`

  postStudent(student:FormData){
  return this.httpClient.post(`${this.url}`,student)
  }

  getStudents():Observable<ApiResponse<Student[]>>{
  return this.httpClient.get<ApiResponse<Student[]>>(`${this.url}`)
  }
  
  putStudent(student:FormData){
    return this.httpClient.put<Student>(`${this.url}`,student)
  }

  deleteStudent(id:string){
    return this.httpClient.delete(`${this.url}${id}`)
  }

  getStudentDetailsById(id:string):Observable<any>{
    return this.httpClient.get<Student>(`${this.url}/student-id?id=`+id)
  }

  getStudentById():Observable<any>{
    return this.httpClient.get<Student>(`${this.url}/student-id`)
  }

  getPendingStudents(){
    return this.httpClient.get(`${this.url}/pendingstudents`)
  }
}
