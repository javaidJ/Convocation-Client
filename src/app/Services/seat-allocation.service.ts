import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AllocatedSeatsResponse, SeatAllocation } from '../Models/Seat/seat';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/Api/api-response';

@Injectable({
  providedIn: 'root'
})
export class SeatAllocationService {

  constructor(private httpClient:HttpClient) { }

  url=`${environment.baseUrl}seatAllocation/`;

  postSeat(seat:SeatAllocation):Observable<ApiResponse<SeatAllocation>>{
    return this.httpClient.post<ApiResponse<SeatAllocation>>(`${this.url}`,seat)
  }


  getConvocationSeats(id:string):Observable<ApiResponse<AllocatedSeatsResponse[]>>{
    return this.httpClient.get<ApiResponse<AllocatedSeatsResponse[]>>(`${this.url}convocation-allocated-seats/${id}`)
  }
}

