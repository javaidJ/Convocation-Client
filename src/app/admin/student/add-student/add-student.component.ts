import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService, private formBuilder:FormBuilder, 
    private router:Router, private departmentService:DepartmentService) { }
  myForm!:FormGroup;
  departmentList:any=[];
  file:any;
  postDepartment(department:string){
    this.departmentService.postDepartment(department).subscribe();
  }
  onSelect(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)
  }
  addStudent(event:Event){
  let form =event.target as HTMLFormElement;
  let formData = new FormData(form);
  console.log(formData)
  formData.append("file",this.file)
  
  this.studentService.postStudent(formData).subscribe(response=>{console.log(response);
  // if(response.success==true){
  //   this.router.navigate(['/signin']);
  // }

  })
  
  }
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
    regNumber:this.formBuilder.control('',),
    name:this.formBuilder.control('',),
    email:this.formBuilder.control('',),
    contactNo1:this.formBuilder.control('',),
    contactNo2:this.formBuilder.control('',),
    file:this.formBuilder.control('',),
    percentage:this.formBuilder.control('',),
    position:this.formBuilder.control('',),
    // departmentName:this.formBuilder.control('',),
  })
  this.departmentService.getDepartments().subscribe(response=>this.departmentList=response.result)
  }

}
