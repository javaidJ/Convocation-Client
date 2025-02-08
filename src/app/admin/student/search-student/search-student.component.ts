import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  constructor(private studentService:StudentService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((param)=>(this.id=param['id']),
  )}
  id='';
  student:any={};
  ngAfterViewInit(){
    // this.studentService.getStudentById(this.id).subscribe(response=>this.student=response.result)
  
  }
  ngOnInit(): void {
  }

}
