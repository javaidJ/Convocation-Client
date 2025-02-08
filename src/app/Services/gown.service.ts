import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddGown, AddGuestResponse } from '../Models/Guest/add-guest';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/Api/api-response';
import { environment } from 'src/environments/environment';
import { GownBookingResponse, GownResponse, StudentGownBookingsResponse } from '../Models/gown';

@Injectable({
  providedIn: 'root'
})
export class GownService {
url=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  addGown(model:FormData):Observable<ApiResponse<AddGown[]>>{
    return this.httpClient.post<ApiResponse<AddGown[]>>(this.url+"Gown",model)
  }
  getAllGowns():Observable<ApiResponse<AddGown[]>>{
    return this.httpClient.get<ApiResponse<AddGown[]>>(this.url+"Gown")
  }

  getGownById(id:string):Observable<ApiResponse<AddGown>>{
    return this.httpClient.get<ApiResponse<AddGown>>(this.url+"Gown/"+id)
  }

  updateGown(model:AddGown):Observable<ApiResponse<AddGown>>{
    return this.httpClient.put<ApiResponse<AddGown>>(this.url+"Gown",model)
  }

  deleteGown(id:string):Observable<ApiResponse<AddGown>>{
    return this.httpClient.delete<ApiResponse<AddGown>>(this.url+"Gown/"+id)
  }



  getMyGowns():Observable<ApiResponse<GownBookingResponse>>{
    return this.httpClient.get<ApiResponse<GownBookingResponse>>(this.url+"GownBooking/mybooking")
  }

  getAllBookedGowns(convocationId:string):Observable<ApiResponse<StudentGownBookingsResponse[]>>{
    return this.httpClient.get<ApiResponse<StudentGownBookingsResponse[]>>(this.url+"GownBooking/gown-bookings/"+convocationId)
  }

}
