import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPipe } from '../pipes/section.pipe';
import { GenderPipe } from '../pipes/gender.pipe';
import { CoursePipe } from '../pipes/course.pipe';
import { ModulePipe } from '../pipes/module.pipe';
import { StatusPipe } from '../pipes/statusRegister.pipe';
import { JobRolePipe } from '../pipes/job-role.pipe';
import { ParticipantRolePipe } from '../pipes/participant-role.pipe';
import { DesignationPipe } from '../pipes/designation.pipe';
import { PositionPipe } from '../pipes/position.pipe';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    SectionPipe,
    GenderPipe,
    CoursePipe,
    ModulePipe,
    StatusPipe,
    JobRolePipe,
    ParticipantRolePipe,
    DesignationPipe,
    PositionPipe,
    SpinnerComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[  
    SectionPipe,
    GenderPipe,
    CoursePipe,
    ModulePipe,
    StatusPipe,
    JobRolePipe,
    ParticipantRolePipe,
    DesignationPipe,
    PositionPipe,
    SpinnerComponent,


  ]
})
export class SharedModule { }
