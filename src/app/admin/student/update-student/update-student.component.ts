import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  constructor( private formBuilder:FormBuilder,
    private studentService:StudentService, private activatedRoute:ActivatedRoute ) { 
      this.activatedRoute.params.subscribe(response=>this.id=response['id'])
    }
    myForm!:FormGroup;
    studentAdress:any;
    studentList:any=[];
    id='';
  
  //  updateAddress(studentAddress:StudentAddress){
  //   this.studentService.putStudentAddress(studentAddress).subscribe(response=>console.log(response))
  //  }

    ngOnInit(): void {
    this.myForm = this.formBuilder.group({
    entityId:this.formBuilder.control(this.id),
    fullAddress:this.formBuilder.control(''),
    optionalAddress:this.formBuilder.control(''),
    state:this.formBuilder.control(''),
    city:this.formBuilder.control(''),
    district:this.formBuilder.control(''),
    zipCode:this.formBuilder.control(''),
   })
   this.studentService.getStudents().subscribe(response=>this.studentList=response.result)
  
    }
  


}
