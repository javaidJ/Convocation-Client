import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserRole } from 'src/app/Enums/user-role';
import { AddEmployee } from 'src/app/Models/Account/add-employee';
import { Department } from 'src/app/Models/department/department';
import { AccountService } from 'src/app/Services/account.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private accountService: AccountService, private departmentService: DepartmentService,
    private formBuilder: FormBuilder) { }

  myForm!:FormGroup;
  departmentList: Department[] = [];
  message = "";
  checkMessage = false;
  addEmployee(user: AddEmployee) {
    user.userRole=UserRole.employee;
    this.accountService.AdminSignup(user).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
          this.checkMessage = false;
          this.message = successResponse.message;
          environment.fireSuccessSwal(successResponse.message);
        }
        // if(successResponse.message == "Email already registered"){
        // //  this.checkMessage = true;
        //  // this.message = successResponse.message;
        // }
      },
      error:(errorResponse)=>{
       // this.checkMessage = true;
       // this.message =errorResponse.error.message
        environment.fireErrorSwal("something went wrong")
      }
    })
    
  }

  close(){
    this.checkMessage = false;
  }
  ngAfterContentInit() {
    this.departmentService.getDepartments().subscribe({
      next: (successResponse) => {
        if (successResponse.isSuccess) {
          this.departmentList = successResponse.result;
          console.log(this.departmentList);
        }
      },
      error: (errorResponse) => {
        this.checkMessage = true;
        this.message = errorResponse.message;
      },
    })
  }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: this.formBuilder.control(""),
      email: this.formBuilder.control(""),
      contactNo: this.formBuilder.control(""),
      userRole: this.formBuilder.control(""),
      departemntId: this.formBuilder.control(""),
      designation: this.formBuilder.control(""),
    })
  }
}


