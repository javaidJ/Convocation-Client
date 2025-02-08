import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { NavComponent } from './Components/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConvocationsComponent } from './convocations/convocations.component';
import { NewEmpListComponent } from './new-emp-list/new-emp-list.component';
import { DesignationPipe } from '../pipes/designation.pipe';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { CoursePipe } from '../pipes/course.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewParticipantComponent } from './view-participant/view-participant.component';
import { ModulePipe } from '../pipes/module.pipe';
import { JobRolePipe } from '../pipes/job-role.pipe';
import { ParticipantRolePipe } from '../pipes/participant-role.pipe';
import { SeatsComponent } from './seats/seats.component';
import { SectionPipe } from '../pipes/section.pipe';
import { SharedModule } from '../shared/shared.module';
import { AllocatedSeatsComponent } from './allocated-seats/allocated-seats.component';


@NgModule({
  declarations: [
    MemberComponent,
    NavComponent,
    DashboardComponent,
    ConvocationsComponent,
    NewEmpListComponent,
    AddGuestComponent,
    GuestListComponent,
    AddStudentComponent,
    StudentListComponent,
    AddParticipantComponent,
    AddMemberComponent,
    AddEmployeeComponent,
    ViewMemberComponent,
    ViewParticipantComponent,
   
    SeatsComponent,
         AllocatedSeatsComponent,
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class MemberModule { }
