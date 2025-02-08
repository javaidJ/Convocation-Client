import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllocatedSeatsResponse } from 'src/app/Models/Seat/seat';
import { SeatAllocationService } from 'src/app/Services/seat-allocation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-allocated-seats',
  templateUrl: './allocated-seats.component.html',
  styleUrls: ['./allocated-seats.component.scss']
})
export class AllocatedSeatsComponent implements OnInit {
 convocationId="";
 allocatedSeats:AllocatedSeatsResponse[]=[];
  constructor(private activatedRoute:ActivatedRoute, private seatAllocationService:SeatAllocationService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(res)=>{
        this.convocationId =res['id']
      }
    });

    this.getAllocatedSeats();
  }


  getAllocatedSeats(){
    this.seatAllocationService.getConvocationSeats(this.convocationId).subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.allocatedSeats=response.result;
        }
        else environment.fireErrorSwal(response.message)
      },
      error:(err)=>{},
    })
  }
}
