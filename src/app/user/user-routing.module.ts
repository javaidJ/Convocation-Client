import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AbouComponent } from './pages/abou/abou.component';
import { ConvolistComponent } from './pages/convolist/convolist.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

const routes: Routes = [
{path:"",component:UserComponent,
children:[
{path:"",redirectTo:"/home", pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"about",component:AbouComponent},
{path:"convolistc",component:ConvolistComponent},
{path:"contact",component:ContactComponent},
{path:"reset",component:ResetpasswordComponent},
{path:"forgetpassword",component:ForgetPasswordComponent},
{path:"verifyemail",component:VerifyEmailComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
