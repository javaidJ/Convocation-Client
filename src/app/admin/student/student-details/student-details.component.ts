import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/student/student';
import { StudentService } from 'src/app/Services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student!:Student;
  id!: string;
  baseUrl=environment.mainBaseUrl;
  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(param)=>{
        this.id= param['id'];
      }
    })
    this.showStudentDetails()
  }


  showStudentDetails(){
   
     this.studentService.getStudentDetailsById(this.id).subscribe({
       next:(response)=>{
         this.student = response.result;
         
       },
       error:(err)=>{
         
       }
     })
    }
   }
