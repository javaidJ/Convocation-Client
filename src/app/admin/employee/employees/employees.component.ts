import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee';
import { AdminService } from 'src/app/Services/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  convocationId=""
  showButton=false;
  Module=2
  constructor(private adminService:AdminService,
    private activatedRoute:ActivatedRoute) {}

  employeeList:Employee[]=[];
  spinner = true;
  myBrands:any;
  showcard:boolean=true;
  showTable:boolean=false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(res)=>{
        this.convocationId=res['id'];
        if(this.convocationId)
        this.showButton=true;
      }
     
    })
    this.adminService.getEmployees().subscribe({
      next:(sucessResponse)=>{
        if(sucessResponse.isSuccess){
         this.employeeList = sucessResponse.result;
         this.spinner = false;

        }
      },
      error:(errorResponse)=>{
      environment.fireSuccessSwal(errorResponse.message);
      }
    });
    this.spinner = false;
  }

}
