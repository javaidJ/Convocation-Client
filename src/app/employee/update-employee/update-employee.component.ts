import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/Models/department/department';
import { Employee, } from 'src/app/Models/employee/employee';
import { AdminService } from 'src/app/Services/admin.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private adminService: AdminService, private departmentService: DepartmentService,
    private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute) { 
    //  activatedRoute.params.subscribe(param =>{
    //   this.id = param['id'];
    //  })
    }
  id:string ="7E3D3917-AC5E-4AD4-8D17-6911D6844D9F";
  myForm!:FormGroup;
  departmentList!: Department[];
  message = "";
  checkMessage = false;
  employee!:Employee;
  file!:string;

  close(){
    this.checkMessage = false;
  }

  onSelect(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)
  }


  ngAfterContentInit(){
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
  updateEmployee(event: Event) {
    let form =event.target as HTMLFormElement;
    let formData = new FormData(form);
    formData.append("file",this.file)
    this.adminService.putEmployees(formData).subscribe({
      next:(successResponse)=>{
        if(successResponse.isSuccess){
          this.checkMessage = true;
          this.message = successResponse.message;
        }

      },
      error:(errorResponse)=>{
        this.checkMessage = true;
        this.message =errorResponse.message;
      }
    })

}
ngOnInit(): void {
  this.myForm = this.formBuilder.group({
    id: this.formBuilder.control(this.id),
    name: this.formBuilder.control(""),
    email: this.formBuilder.control(""),
    contactNo: this.formBuilder.control(""),
    gender: this.formBuilder.control(""),
    empCode: this.formBuilder.control(""),
    departemntId: this.formBuilder.control(""),
    designation: this.formBuilder.control(""),
    file: this.formBuilder.control(""),
  })
 

  
 this.adminService.getEmployeeById(this.id).subscribe({
  next:(successResponse)=>{
    if(successResponse.isSuccess){
     this.employee = successResponse.result;
     console.log(this.employee)
     
    }
  },
  error:(erorResponse)=>{
   this.message = erorResponse.error.message;
  }
 })
}
}

