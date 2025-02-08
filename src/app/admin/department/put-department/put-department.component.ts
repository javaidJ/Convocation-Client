import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/Models/department/department';
import { EditDepartment } from 'src/app/Models/department/edit-department';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-put-department',
  templateUrl: './put-department.component.html',
  styleUrls: ['./put-department.component.scss']
})
export class PutDepartmentComponent implements OnInit {

  constructor(private departmentService: DepartmentService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id']
    });
  }
  id!: string;
  myForm!: FormGroup;
  department: Department = new Department();
  ngOnInit() {

    this.myForm = this.formBuilder.group({
      id: this.formBuilder.control(this.id, []),
      departmentName: this.formBuilder.control(this.department.departmentName, []),

    })


  }

  putDepartment(department: EditDepartment,) {

    this.departmentService.putDepartment(department).subscribe(response => (console.log(response)))
  }


}
