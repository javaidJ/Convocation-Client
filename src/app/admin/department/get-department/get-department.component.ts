import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from 'src/app/Models/department/department';
import { DepartmentService } from 'src/app/Services/department.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-department',
  templateUrl: './get-department.component.html',
  styleUrls: ['./get-department.component.scss']
})
export class GetDepartmentComponent implements OnInit {

  constructor(private departmentService:DepartmentService,private formBuilder:FormBuilder){}
  @ViewChild('input') input!:ElementRef
  departmentList:Department[] = [];
  myForm!:FormGroup;
  spinner = true;
  isReadOnly: boolean = true;
  update(){
   return this.isReadOnly = false;
 }

  updateDepartment(id:string, departmentName:string){
     let department = new Department(id,departmentName)
    console.log(department)
    this.departmentService.putDepartment(department).subscribe({
      next:(successResponse)=>{
       if(successResponse) {
        environment.fireSuccessSwal(successResponse.message);
       }
      },
      error:(errorResponse)=>{
       environment.fireErrorSwal(errorResponse.message);
      }
    })
  }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id:this.formBuilder.control(""),
      departmentName:this.formBuilder.control(""),
   
    })
    this.departmentService.getDepartments().subscribe({
    next:(sucessResponse)=>{
     this.spinner=false;
    if(sucessResponse.isSuccess){
    this.departmentList = sucessResponse.result;
    }},
    error:(errorResponse)=>{
     environment.fireErrorSwal(errorResponse.message);
    }
  })

  }
}
