import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { ConvocationDetailsComponent } from './Convocations/convocation-details/convocation-details.component';
import { AddConvocationDetailsComponent } from './Convocations/add-convocation-details/add-convocation-details.component';
import { UpdateConvocationDetailsComponent } from './Convocations/update-convocation-details/update-convocation-details.component';
import { PostDepartmentComponent } from './department/post-department/post-department.component';
import { GetDepartmentComponent } from './department/get-department/get-department.component';
import { PutDepartmentComponent } from './department/put-department/put-department.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { GetVenueComponent } from './venue/get-venue/get-venue.component';
import { PostVenueComponent } from './venue/post-venue/post-venue.component';
import { PutVenueComponent } from './venue/put-venue/put-venue.component';
import { MoreDetailsComponent } from './employee/more-details/more-details.component';
import { AddMemberComponent } from './Member/add-member/add-member.component';
import { MemberListComponent } from './Member/member-list/member-list.component';
import { MemberListByConvocationComponent } from './Member/member-list-by-convocation/member-list-by-convocation.component';
import { AddGuestComponent } from './Guest/add-guest/add-guest.component';
import { GuestListComponent } from './Guest/guest-list/guest-list.component';
import { AddGownComponent } from './Gown/add-gown/add-gown.component';
import { GownListComponent } from './Gown/gown-list/gown-list.component';
import { NewGuestListComponent } from './Member/new-guest-list/new-guest-list.component';
import { AddseatComponent } from './Seat/addseat/addseat.component';
import { SeatAllocationComponent } from './Seat/seat-allocation/seat-allocation.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { NewEmpListComponent } from './new-emp-list/new-emp-list.component';
import { NewStudentListComponent } from './student/new-student-list/new-student-list.component';
import { ParticipantListByConvoComponent } from './participant-list-by-convo/participant-list-by-convo.component';
import { PendingRegistrationComponent } from './pending-registration/pending-registration.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SeatListComponent } from './Seat/seat-list/seat-list.component';
import { SeatlistbyvenueComponent } from './seatlistbyvenue/seatlistbyvenue.component';
import { AuthGuard } from '../Guards/auth.guard';
import { ConvocationParticipantsComponent } from './convocation-participants/convocation-participants.component';
import { OtherParticipantsComponent } from './other-participants/other-participants.component';
import { ConvocationMembersComponent } from './convocation-members/convocation-members.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { AllocatedSeatsComponent } from './allocated-seats/allocated-seats.component';
import { EditGownComponent } from './Gown/edit-gown/edit-gown.component';
import { GownBookingsComponent } from './Gown/gown-bookings/gown-bookings.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:AdminComponent,
  // canActivate:[AuthGuard],
  children:[
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {path:"dashboard",component:DashboardComponent},
  {path:"addemployee",component:AddEmployeeComponent},
  {path:"employees/:id",component:EmployeesComponent},
  {path:"employeedetails/:id",component:MoreDetailsComponent},
  {path:"addstudent",component:AddStudentComponent},
  {path:"studentlist",component:StudentListComponent},
  {path:"updatestudent",component:UpdateStudentComponent},
  {path:"addconvocationdetails",component:AddConvocationDetailsComponent},
  {path:"convocationdetails",component:ConvocationDetailsComponent},
  {path:"convocationdetails/updateconvocation/:id",component:UpdateConvocationDetailsComponent},
  {path:"adddepartment",component:PostDepartmentComponent},
  {path:"getdepartments",component:GetDepartmentComponent},
  {path:"putdepartment",component:PutDepartmentComponent},
  {path:"venue",component:GetVenueComponent},
  {path:"addvenue",component:PostVenueComponent},
  {path:"updatevenue/:id",component:PutVenueComponent},
  {path:"addconvocation",component:AddConvocationDetailsComponent},
  {path:"addmemberdetails",component:AddMemberComponent},
  {path:"memberList",component:MemberListComponent},
  {path:"addMember/:id1/:id2/:item",component:AddMemberComponent},
  {path:"memberListByConvo/:id/:name/:venueId",component:MemberListByConvocationComponent},
  {path:"participantListByConvo/:id/:name/:venueId",component:ParticipantListByConvoComponent},
  {path:"convocation-participants/:id/:name/:role",component:ConvocationParticipantsComponent},
  {path:"other-participants/:id/:name",component:OtherParticipantsComponent},
  {path:"member-convocation/:id/:name",component:ConvocationMembersComponent},
  {path:"student-details/:id",component:StudentDetailsComponent},
  {path:"guest-details/:id",component:GuestDetailsComponent},

  {path:"addGuest",component:AddGuestComponent},
  {path:"guestList/:id",component:GuestListComponent},
  {path:"gList",component:GuestListComponent},
  {path:"addGown",component:AddGownComponent},
  {path:"employees",component:EmployeesComponent},
  {path:"gownList",component:GownListComponent},
  {path:"newGuestList/:id",component:NewGuestListComponent},
  {path:"emps",component:EmployeesComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"edit-gown/:id",component:EditGownComponent},
  {path:"allocated-seats/:id",component:AllocatedSeatsComponent},
  {path:"gown-bookings/:id",component:GownBookingsComponent},
  { path: 'contacts', component: ContactComponent },
  {path:"addseat/:id",component:AddseatComponent},
  {path:"seatallocation",component:SeatAllocationComponent},
  {path:"stdlist/:id",component:StudentListComponent},
  {path:"newStdList/:id",component:NewStudentListComponent},
  {path:"addParticipant/:id1/:id2/:item",component:AddParticipantComponent},
  {path:"newEmpList/:id",component:NewEmpListComponent},
  {path:"pendingRegistration/:id",component:PendingRegistrationComponent},
  {path:"seatlist/:id",component:SeatListComponent},
  {path:"seatlistbyvenue/:id/:venueId/:participantId",component:SeatlistbyvenueComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
