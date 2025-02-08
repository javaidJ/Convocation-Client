import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  AddGown } from 'src/app/Models/Guest/add-guest';
import { GownService } from 'src/app/Services/gown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-gown',
  templateUrl: './add-gown.component.html',
  styleUrls: ['./add-gown.component.scss']
})
export class AddGownComponent implements OnInit {
AddGown:AddGown=new AddGown();
myFormData=new FormData();
 files:FileList[]=[];
  constructor(private service:GownService) { }

  ngOnInit(): void {
  }

  myFiles(event:any){

  this.files=event.target.files[0]
  console.log(this.files)

  }

  AddNewGown(event:Event){
    let myForm=event.target as HTMLFormElement;
    let formData=new FormData(myForm);
    this.service.addGown(formData).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          environment.fireSuccessSwal(response.message)
        }
        else{
          environment.fireErrorSwal(response.message)
        }
      }
    })
    }
   

}

