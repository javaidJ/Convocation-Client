import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddGown } from 'src/app/Models/Guest/add-guest';
import { GownService } from 'src/app/Services/gown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-gown',
  templateUrl: './edit-gown.component.html',
  styleUrls: ['./edit-gown.component.scss']
})
export class EditGownComponent implements OnInit {
  AddGown:AddGown=new AddGown();
myFormData=new FormData();
 files:FileList[]=[];
 id = '';
  constructor(private service:GownService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe({
      next:(res)=> {
        this.id = res['id'];
      }
    });
    this.getGownById();
  }

  myFiles(event:any){

  this.files=event.target.files[0]
  console.log(this.files)

  }

  getGownById(){
    this.service.getGownById(this.id).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.AddGown=response.result;
        }
      }
    })
  }



  AddNewGown(){
    this.service.updateGown(this.AddGown).subscribe({
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

