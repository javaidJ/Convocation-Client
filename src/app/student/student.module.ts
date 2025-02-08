import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './student.component';
import { ConvocationListComponent } from './pages/convocation-list/convocation-list.component';
import { GownlistComponent } from './pages/gownlist/gownlist.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../Services/interceptor.service';
import { MyConvocationsComponent } from './my-convocations/my-convocations.component';
import { GownbookingComponent } from './pages/gownbooking/gownbooking.component';
import { AddressComponent } from './pages/address/address.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    StudentComponent,
    ConvocationListComponent,
    GownlistComponent,
    GownbookingComponent,
    ProfileComponent,
    ChangePasswordComponent,
    MyConvocationsComponent,
    AddressComponent,
  
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    SharedModule
  ],
 
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService ,multi:true}],
})
export class StudentModule { }
