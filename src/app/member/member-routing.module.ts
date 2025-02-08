import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConvocationsComponent } from './convocations/convocations.component';
import { NewEmpListComponent } from './new-emp-list/new-emp-list.component';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewParticipantComponent } from './view-participant/view-participant.component';
import { SeatsComponent } from './seats/seats.component';
import { AllocatedSeatsComponent } from './allocated-seats/allocated-seats.component';

const routes: Routes = [
  {path:"",component:MemberComponent,
  // canActivate:[AuthGuard],
  children:[
    // {path:"",redirectTo:"dashboard",pathMatch:"full"},
    // {path:"dashboard",component:DashboardComponent},
    {path:"",redirectTo:"convocations",pathMatch:"full"},
    {path:"convocations",component:ConvocationsComponent},
    {path:"newEmpList/:id",component:NewEmpListComponent},
    {path:"addGuest",component:AddGuestComponent},
    {path:"guestList/:id",component:GuestListComponent},
    {path:"addstudent",component:AddStudentComponent},
    {path:"add-employee",component:AddEmployeeComponent},
    {path:"students/:id",component:StudentListComponent},
    {path:"addMember/:id1/:id2/:item",component:AddMemberComponent},
  {path:"addParticipant/:id1/:id2/:item",component:AddParticipantComponent},
  {path:"memberListByConvo/:id/:name/:venueId",component:ViewMemberComponent},
  {path:"participantListByConvo/:id/:name/:venueId",component:ViewParticipantComponent},
  {path:"seatlistbyvenue/:id/:venueId/:participantId",component:SeatsComponent},
  {path:"allocated-seats/:id",component:AllocatedSeatsComponent},




  // {path:"updatevenue/:id",component:PutVenueComponent},
  // {path:"addconvocation",component:AddConvocationDetailsComponent},
  // {path:"addmemberdetails",component:AddMemberComponent},
  // {path:"memberList",component:MemberListComponent},
  // {path:"addMember/:id1/:id2",component:AddMemberComponent},
  // {path:"memberListByConvo/:id/:name/:venueId",component:MemberListByConvocationComponent},
  // {path:"participantListByConvo/:id/:name/:venueId",component:ParticipantListByConvoComponent},

  // {path:"addGuest",component:AddGuestComponent},
  // {path:"guestList/:id",component:GuestListComponent},
  // {path:"gList",component:GuestListComponent},
  // {path:"addGown",component:AddGownComponent},
  // {path:"employees",component:EmployeesComponent},
 

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
