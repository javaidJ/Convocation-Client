import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/department.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-department',
  templateUrl: './post-department.component.html',
  styleUrls: ['./post-department.component.scss']
})
export class PostDepartmentComponent implements OnInit {

  constructor(private departmentService:DepartmentService , private formBuilder:FormBuilder){}
  myForm!:FormGroup;
  ngOnInit():void {
    this.myForm =this.formBuilder.group({
    // id: this.formBuilder.control("",[]),
    departmentName: this.formBuilder.control("",[])
    })

  }
  postDepartment(form:string){
  this.departmentService.postDepartment(form).subscribe({
    next:(successResponse)=>{
      if(successResponse.isSuccess){
        environment.fireSuccessSwal(successResponse.message)
        
      }
      else{
        environment.fireErrorSwal(successResponse.message)
      }
    },
    error:(errorResponse)=>{
        environment.fireErrorSwal(errorResponse.message)
    }
  })
  }
  // departmentList:Department[] = [];
  // getDepartment(){
  //   this.departmentService.getDepartments().subscribe(response=>(this.departmentList = response.result))
  //     // console.log(this.departmentList);
  
  // }
}
