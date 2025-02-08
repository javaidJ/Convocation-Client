import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PutSeat, Seat, SeatAllocation, SeatByVenueResponse } from '../Models/Seat/seat';
import { ApiResponse } from '../Models/Api/api-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private httpClient:HttpClient){}
  url=`${environment.baseUrl}seats/`;

  postSeat(seat:Seat):Observable<ApiResponse<Seat>>{
    return this.httpClient.post<ApiResponse<Seat>>(`${this.url}`,seat)
  }
 
  putSeat(seat:PutSeat):Observable<ApiResponse<Seat>>{
    return this.httpClient.post<ApiResponse<Seat>>(`${this.url}`,seat)
  }
  
  getSeatsById():Observable<ApiResponse<Seat>>{
    return this.httpClient.get<ApiResponse<Seat>>(`${this.url}`)
  }
  
  getSeatByVenueId(id:string):Observable<ApiResponse<SeatByVenueResponse[]>>{
    return this.httpClient.get<ApiResponse<SeatByVenueResponse[]>>(`${this.url}venue/${id}`)
  }
  AllocateSeat(model:SeatAllocation):Observable<ApiResponse<any>>{
  return this.httpClient.post<ApiResponse<any>>("http://localhost:5188/api/SeatAllocation",model)
  }
}
