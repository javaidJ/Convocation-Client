import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/Models/Account/signup';
import { Department } from 'src/app/Models/department/department';
import { AccountService } from 'src/app/Services/account.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private accountService:AccountService,
   private departmentService:DepartmentService, private router:Router) { }

  departmentList:Department[]= [];
  message ="";
  checkMessage = false;
  loadSpinner=false;
  signupModel:Signup=new Signup()

 
  close(){
    this.checkMessage = false;
  }

  
  ngOnInit(): void {
    this.getdepartments();
  }

  signup(){
    this.loadSpinner=true;
    this.accountService.signup(this.signupModel).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
           this.router.navigate(["/login"])
        }
      
        if(successResponse.isSuccess){
           environment.fireSuccessSwal(successResponse.message);
        }
        else {
          environment.fireErrorSwal(successResponse.message);
          this.loadSpinner=false;
        }
      },

      error:(errorResponse)=>{
      this.checkMessage = false;
      this.message = errorResponse.error.message;
       
      }
    });

  }
   
  getdepartments(){
    this.departmentService.getDepartments().subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
           this.departmentList = successResponse.result;
           console.log(this.departmentList);
        }
      },
      error:(errorResponse)=>{
       this.checkMessage = true;
        this.message = errorResponse.message;
      },
     })
  }
  
   

   
  }


