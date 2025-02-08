import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from './auths/student.guard';
import { AdminGuard } from './auths/admin.guard';
import { MemberGuard } from './auths/member.guard.';
import { EmployeeGuard } from './auths/employee.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((r) => r.UserModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((r) => r.StudentModule),
    canActivate: [StudentGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((r) => r.AdminModule),
      canActivate: [AdminGuard],
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((r) => r.EmployeeModule),
      canActivate: [EmployeeGuard],

  },
  {
    path: 'member',
    loadChildren: () =>
      import('./member/member.module').then((r) => r.MemberModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
