import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddAddress } from '../Models/Address/add-address';
import { AddressDetails } from '../Models/Address/address-details';
import { Observable } from 'rxjs';
import { EditAddress } from '../Models/Address/edit-address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient:HttpClient) { }

url=`${environment.baseUrl}addresses`;

postAddress(address:AddAddress):Observable<any>{
  return this.httpClient.post(`${this.url}`,address)
}

getAddress():Observable<AddressDetails>{
  return this.httpClient.get<AddressDetails>(`${this.url}`)
}

putAddress(address:EditAddress):Observable<EditAddress>{
  return this.httpClient.put<EditAddress>(`${this.url}`,address)
}

DeleteAddress(id:string){
  return this.httpClient.delete(`${this.url}/${id}`)
}

getAddressById(id:string){
  return this.httpClient.get(`${this.url}/${id}`)
}

getAddressByUserAddress(){
  return this.httpClient.get(`${this.url}/useraddresses`)
}
}
