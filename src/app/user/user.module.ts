import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
export class AppModule { }
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AbouComponent } from './pages/abou/abou.component';
import { ConvolistComponent } from './pages/convolist/convolist.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    AbouComponent,
    ConvolistComponent,
    ContactComponent,
    ResetpasswordComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class UserModule { }
