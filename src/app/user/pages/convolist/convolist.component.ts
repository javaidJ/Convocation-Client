import { Component, OnInit } from '@angular/core';
import { Convocation } from 'src/app/Models/Convocation/convocation';
import { ConvocationService } from 'src/app/Services/convocation.service';

@Component({
  selector: 'app-convolist',
  templateUrl: './convolist.component.html',
  styleUrls: ['./convolist.component.scss']
})
export class ConvolistComponent implements OnInit {
  currentDate = new Date();
convocations:Convocation[] = [];
  constructor(private service:ConvocationService) { }

  ngOnInit(): void {
    this.service.getConvocationDetails().subscribe({
      next:(response)=>{
        if(response.isSuccess){

          for (const con of response.result) {
            let conDate = new Date(con.convocationDate);
            if(this.currentDate < conDate)
            {
              console.log(conDate);
              con.convocationDate = conDate.toString();
              this.convocations.push(con);
            }
          }

        }
      }
    })
  }

}
