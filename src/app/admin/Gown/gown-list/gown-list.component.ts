import { Component, OnInit } from '@angular/core';
import { AddGown } from 'src/app/Models/Guest/add-guest';
import { GownService } from 'src/app/Services/gown.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gown-list',
  templateUrl: './gown-list.component.html',
  styleUrls: ['./gown-list.component.scss']
})
export class GownListComponent implements OnInit {
 GownList:AddGown[]=[];
 baseUrl=environment.mainBaseUrl;
  constructor(private service:GownService) { }

  ngOnInit(): void {
   this.getALLGowns();
  }


  getALLGowns(){
    this.service.getAllGowns().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.GownList=response.result
        }
        // else{
        //   environment.fireErrorSwal(response.message)
        // }
      }
    })
  }



  deleteGown(id:string){
    environment.fireConfirmSwal('Are You sure you want to delete this gown ').then(result=>{
      if(result.isConfirmed){
        this.service.deleteGown(id).subscribe({
          next:(response)=>{
            if(response.isSuccess){
              environment.fireSuccessSwal(response.message);
              this.getALLGowns();
            }
            else{
              environment.fireErrorSwal(response.message);
            }
          }
        })
      }
    })
   
  }
  editGown(id:string){

  }

}
