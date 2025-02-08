import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee';
import { AdminService } from 'src/app/Services/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-emp-list',
  templateUrl: './new-emp-list.component.html',
  styleUrls: ['./new-emp-list.component.scss']
})
export class NewEmpListComponent implements OnInit {
  convoId=''
  Module=2;
  constructor(private adminService:AdminService,private ac:ActivatedRoute) { 
 this.ac.params.subscribe(val=>{
  this.convoId=val['id']
 })
  }

 
  employeeList:Employee[]=[];
  spinner = true;
  showcard:boolean=true;
  showTable:boolean=false;
  ngOnInit(): void {
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
