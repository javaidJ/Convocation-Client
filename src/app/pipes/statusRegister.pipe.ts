import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value:any){
    if(value==1){
      return "Pending"
    }
    else if(value==2){
      return "Approved"
    }
    return "Rejected"
  }

}
