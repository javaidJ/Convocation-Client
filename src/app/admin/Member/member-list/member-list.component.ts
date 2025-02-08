import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { ConvocationService } from 'src/app/Services/convocation.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
myBrands:any
  constructor(private service:ConvocationService) { }
   convocations:Convocation[]=[];
   showcard:boolean=true;
   showTable:boolean=false;
  ngOnInit(): void {

    this.service.getConvocationDetails().subscribe({
      next:(response)=>{
        console.log(response)
        if(response.isSuccess){
          this.convocations=response.result
        }
      },
      error:(err)=>{
        if(err.error.message==HttpStatusCode.BadRequest){
          alert("something went wrong")
        }
      }
    })
  }

  getGuests(){
  
  }

}
