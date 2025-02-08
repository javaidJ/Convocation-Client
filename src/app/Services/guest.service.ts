import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddGuest, AddGuestResponse, AddGuestToConvocation, GuestResponse } from '../Models/Guest/add-guest';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '../Models/Api/api-response';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
 url:string=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }
  public ConvationKey:Subject<string> = new Subject<string>(); 
  AddGuest(model:AddGuest):Observable<ApiResponse<AddGuest>>{
    return this.httpClient.post<ApiResponse<AddGuest>>(this.url+"Guest",model)
  }

  getAllGuests():Observable<ApiResponse<AddGuestResponse[]>>{
    return this.httpClient.get<ApiResponse<AddGuestResponse[]>>(this.url+"Guest")
  }

  AddGuestToConvocation(model:AddGuestToConvocation):Observable<ApiResponse<AddGuestResponse[]>>{
    return this.httpClient.post<ApiResponse<AddGuestResponse[]>>(this.url+"Registration/register-admin",model)
  }

  getGuestDetails(id:string):Observable<ApiResponse<GuestResponse>>{
    return this.httpClient.get<ApiResponse<GuestResponse>>(this.url+"Guest/"+id);
  }
}
