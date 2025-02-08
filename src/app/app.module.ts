import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './Services/interceptor.service';
import { ChangePasswordComponent } from './student/pages/change-password/change-password.component';
import { AppPaymentStatusPipe } from './pipes/app-payment-status.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AppPaymentStatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService ,multi:true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
