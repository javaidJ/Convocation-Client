import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-student-list',
  templateUrl: './new-student-list.component.html',
  styleUrls: ['./new-student-list.component.scss']
})
export class NewStudentListComponent implements OnInit {
  convoId=''
  Module=1
  constructor(private studentService:StudentService,private ac:ActivatedRoute) {
    this.ac.params.subscribe(val=>{
      this.convoId=val['id']
      console.log(this.convoId);
      
    })
   }
  studentList!:any[];
  headers!:HttpHeaders;
  spinner=true;

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next:(successResponse)=>{
       this.studentList=successResponse.result;
       console.log(this.studentList)
        this.spinner=false;
      },
      error:(errorResponse)=>{
       environment.fireErrorSwal(errorResponse.message);
      }
 
     })
  }

}
