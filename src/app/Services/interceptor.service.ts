import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{
  service:SharedService;
  constructor(sharedService:SharedService) { 
    this.service=sharedService
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ this.service.getToken(),
      },  
    }));
  }
}
