import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:EmployeeComponent,
  children:[
  {path:"",redirectTo:"/dashboard", pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent},
  {path:"updateemployee", component:UpdateEmployeeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
