import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Student } from 'src/app/Models/student/student';
import { StudentService } from 'src/app/Services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentResult!: Student
  url=environment.mainBaseUrl;
  modelPop=true;
  section=true;
  id=''
  
  constructor(private service: StudentService) { }

  ngOnInit(): void {
   this.getbyId();
  }
  loggedInUserName=''

  getbyId(){
    this.service.getStudentById().subscribe({
      next: (res) => {
        this.studentResult = res.result
        this.id=this.studentResult.id
      },
      error: (err) => {
        environment.fireErrorSwal(err.message)
      }
    })
  }

  updateProfileData(event:any){
  let myForm=<HTMLFormElement> event.target
  let formData=new FormData(myForm);
  formData.append("Id",this.id)
  this.service.putStudent(formData).subscribe({
    next:(res)=>{
      environment.fireSuccessSwal('Student Updated Successfuuly')
      location.reload();
      this.getbyId();
    
  }
})
  
    
  }
}
