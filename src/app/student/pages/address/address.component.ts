import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/Enums/user-role';
import { AddAddress } from 'src/app/Models/Address/add-address';
import { AddressService } from 'src/app/Services/address.service';
import { StudentService } from 'src/app/Services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  AddressModel: AddAddress = new AddAddress();
  studentId = '';
  constructor(
    private studentService: StudentService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudentById().subscribe({
      next: (res) => {
        this.studentId = res.result.id;
        console.log(this.studentId);
      },
      error: (err) => {
        environment.fireErrorSwal(err.message);
      },
    });
  }

  AddStudentAddress(postalCode: string) {
    this.AddressModel.module = Module.Student;
    this.AddressModel.entityId = this.studentId;
    this.AddressModel.postalCode = parseInt(postalCode);
    this.addressService.postAddress(this.AddressModel).subscribe({
      next: (response) => {
        console.log(response);
        if (response.isSuccess) environment.fireSuccessSwal(response.message);
        else environment.fireErrorSwal(response.message);
      },
      error: (err : Error) => {
        environment.fireErrorSwal(err.message);
      },
    });
  }
}
