import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { ConvocationListComponent } from './pages/convocation-list/convocation-list.component';
import { GownlistComponent } from './pages/gownlist/gownlist.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { GownbookingComponent } from './pages/gownbooking/gownbooking.component';
import { MyConvocationsComponent } from './my-convocations/my-convocations.component';
import { AddressComponent } from './pages/address/address.component';

const routes: Routes = [
  {path:"",component:StudentComponent, 
  // canActivate:[AuthGuard],
  children: [
  {path:"", redirectTo:"convocation",pathMatch:"full"},
  {path:"convocation", component:ConvocationListComponent},
  // {path:"gownlistst",component:GownlistComponent},
  {path:"profile",component:ProfileComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:"gownlist/:id",component:GownlistComponent},
  {path:"my-gown-booking",component:GownbookingComponent},
  {path:"my-convocations",component:MyConvocationsComponent},
  {path:"address",component:AddressComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
