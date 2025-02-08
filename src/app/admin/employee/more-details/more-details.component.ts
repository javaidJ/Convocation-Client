import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee';
import { AdminService } from 'src/app/Services/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {

  constructor(private adminService:AdminService, private activatedRoute:ActivatedRoute) { 
   this.activatedRoute.params.subscribe(param=>{
    this.id = param['id'];
   })
  }

  employee!:Employee;
  spinner = false;
  id!:string;
  ngOnInit(): void {
    this.adminService.getEmployeeById(this.id).subscribe({
      next:(sucessResponse)=>{
        if(sucessResponse.isSuccess){
         this.employee = sucessResponse.result;
        }
      },
      error:(errorResponse)=>{
      environment.fireErrorSwal(errorResponse.message);
      }
    });
  }

}
