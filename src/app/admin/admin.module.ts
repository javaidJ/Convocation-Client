import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/nav/nav.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { SearchStudentComponent } from './student/search-student/search-student.component';
import { AddConvocationDetailsComponent } from './Convocations/add-convocation-details/add-convocation-details.component';
import { ConvocationDetailsComponent } from './Convocations/convocation-details/convocation-details.component';
import { UpdateConvocationDetailsComponent } from './Convocations/update-convocation-details/update-convocation-details.component';
import { PostDepartmentComponent } from './department/post-department/post-department.component';
import { GetDepartmentComponent } from './department/get-department/get-department.component';
import { PutDepartmentComponent } from './department/put-department/put-department.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { PostVenueComponent } from './venue/post-venue/post-venue.component';
import { GetVenueComponent } from './venue/get-venue/get-venue.component';
import { PutVenueComponent } from './venue/put-venue/put-venue.component';
import { MoreDetailsComponent } from './employee/more-details/more-details.component';
import { MemberListComponent } from './Member/member-list/member-list.component';
import { AddMemberComponent } from './Member/add-member/add-member.component';
import { MemberListByConvocationComponent } from './Member/member-list-by-convocation/member-list-by-convocation.component';
import { ModulePipe } from '../pipes/module.pipe';
import { JobRolePipe } from '../pipes/job-role.pipe';
import { AddGuestComponent } from './Guest/add-guest/add-guest.component';
import { GuestListComponent } from './Guest/guest-list/guest-list.component';
import { AddGownComponent } from './Gown/add-gown/add-gown.component';
import { GownListComponent } from './Gown/gown-list/gown-list.component';
import { NewGuestListComponent } from './Member/new-guest-list/new-guest-list.component';
import { AddseatComponent } from './Seat/addseat/addseat.component';
import { DesignationPipe } from '../pipes/designation.pipe';
import { SeatAllocationComponent } from './Seat/seat-allocation/seat-allocation.component';
import { GenderPipe } from '../pipes/gender.pipe';
import { IsDeletedPipe } from '../pipes/is-deleted.pipe';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { CoursePipe } from '../pipes/course.pipe';
import { EmployeesComponent } from './employee/employees/employees.component';
import { NewEmpListComponent } from './new-emp-list/new-emp-list.component';
import { NewStudentListComponent } from './student/new-student-list/new-student-list.component';
import { ParticipantListByConvoComponent } from './participant-list-by-convo/participant-list-by-convo.component';
import { ParticipantRolePipe } from '../pipes/participant-role.pipe';
import { PendingRegistrationComponent } from './pending-registration/pending-registration.component';
import { StatusPipe } from '../pipes/statusRegister.pipe';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SeatListComponent } from './Seat/seat-list/seat-list.component';
import { SectionPipe } from '../pipes/section.pipe';
import { SeatlistbyvenueComponent } from './seatlistbyvenue/seatlistbyvenue.component';
import { SharedModule } from '../shared/shared.module';
import { GownBookingsComponent } from './Gown/gown-bookings/gown-bookings.component';
import { ConvocationParticipantsComponent } from './convocation-participants/convocation-participants.component';
import { OtherParticipantsComponent } from './other-participants/other-participants.component';
import { ConvocationMembersComponent } from './convocation-members/convocation-members.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { AllocatedSeatsComponent } from './allocated-seats/allocated-seats.component';
import { EditGownComponent } from './Gown/edit-gown/edit-gown.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    NavComponent,
    StudentListComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    SearchStudentComponent,
    AddConvocationDetailsComponent,
    ConvocationDetailsComponent,
    UpdateConvocationDetailsComponent,
    PostDepartmentComponent,
    GetDepartmentComponent,
    PutDepartmentComponent,
    AddEmployeeComponent,
    PostVenueComponent,
    GetVenueComponent,
    PutVenueComponent,
    MoreDetailsComponent,
    MemberListComponent,
    AddMemberComponent,
    MemberListByConvocationComponent,
    AddGuestComponent,
    GuestListComponent,
    AddGownComponent,
    GownListComponent,
    NewGuestListComponent,
    AddseatComponent,
    SeatAllocationComponent,
    IsDeletedPipe,
    AddParticipantComponent,
    EmployeesComponent,
    NewEmpListComponent,
    NewStudentListComponent,
    ParticipantListByConvoComponent,
    PendingRegistrationComponent,
    DashboardComponent,
    SeatListComponent,
    SeatlistbyvenueComponent,
    GownBookingsComponent,
    ConvocationParticipantsComponent,
    OtherParticipantsComponent,
    ConvocationMembersComponent,
    StudentDetailsComponent,
    GuestDetailsComponent,
    AllocatedSeatsComponent,
    EditGownComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],

})
export class AdminModule { }
