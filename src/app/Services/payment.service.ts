import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/Api/api-response';
import { environment } from 'src/environments/environment';
import { AppOrderResponse } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}


  payInvoice(id: string, convocationid:string): Observable<ApiResponse<AppOrderResponse>> {
    let invoice = {
      gownId: id,
      convocationId:convocationid
    };
    return this.httpClient.post<ApiResponse<AppOrderResponse>>(
      environment.baseUrl + 'GownBooking/CreateOrder',
      invoice
    );
  }

CapturePaymentDetails(paymentOptions: any): Observable<ApiResponse<any>> {
  return this.httpClient.post<ApiResponse<any>>(
    environment.baseUrl + 'GownBooking/CapturePaymentDetails',
    paymentOptions
  );
}

}
