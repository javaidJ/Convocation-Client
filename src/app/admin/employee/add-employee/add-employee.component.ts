import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  showSpinner=false;
  constructor(private accountService: AccountService, private departmentService: DepartmentService,
    private formBuilder: FormBuilder) { }

  myForm!:FormGroup;
  departmentList: Department[] = [];
  message = "";
  checkMessage = false;
  addEmployee(user: AddEmployee) {
    this.showSpinner=true;
    this.accountService.AdminSignup(user).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
          this.checkMessage = false;
          this.message = successResponse.message;
          environment.fireSuccessSwal(successResponse.message);
        }
        this.showSpinner=false;

      },
      error:(errorResponse)=>{
       // this.checkMessage = true;
       // this.message =errorResponse.error.message
        environment.fireErrorSwal("something went wrong");
        this.showSpinner=false;
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


