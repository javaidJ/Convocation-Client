import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../Models/Api/api-response';
import { Observable } from 'rxjs';
import { PostvenueResponse, PutVenue, Venue, VenueResponse } from '../Models/venue/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  constructor(private httpClient:HttpClient){}
  url=`${environment.baseUrl}venue`;

  postVenue(venue:Venue):Observable<ApiResponse<PostvenueResponse>>{
    return this.httpClient.post<ApiResponse<PostvenueResponse>>(`${this.url}`,venue)
  }
 
  getVenue():Observable<ApiResponse<Venue[]>>{
    return this.httpClient.get<ApiResponse<Venue[]>>(`${this.url}`)
  }

  putVenue(venue:PutVenue){
    return this.httpClient.put<ApiResponse<VenueResponse>>(`${this.url}`,venue)
  }

  getVenueById(id:string):Observable<ApiResponse<Venue>>{
    return this.httpClient.get<ApiResponse<Venue>>(`${this.url}/${id}`)
  }
}
