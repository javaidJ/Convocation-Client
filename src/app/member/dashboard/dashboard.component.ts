import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ConvocationService } from 'src/app/Services/convocation.service';
import { GuestService } from 'src/app/Services/guest.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Convolength:number=0;
  GuestCount=0;
  employeeCount=0;
  stdCount=0
  
  constructor(private service:ConvocationService,
              private guestService:GuestService,
              private empService:AdminService,
              private stdService:StudentService
    ) { }

  ngOnInit(): void {
    this.service.getConvocationDetails().subscribe({
      next:(res)=>{
        if(res.isSuccess){
          this.Convolength=res.result.length;
        }
      }
    })

    this.guestService.getAllGuests().subscribe({
      next:(res)=>{
        if(res.isSuccess){
          this.GuestCount=res.result.length
        }
      }
    })

    this.empService.getEmployees().subscribe({
      next:(res)=>{
        if(res.isSuccess){
          this.employeeCount=res.result.length
        }
      }
    })

    this.stdService.getStudents().subscribe({
      next:(res)=>{
        if(res.isSuccess){
          this.stdCount=res.result.length
        }
      }
    })
  }



}
