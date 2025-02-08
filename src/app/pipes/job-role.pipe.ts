import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobRole'
})
export class JobRolePipe implements PipeTransform {

  transform(value:any ) {
    if(value==1){
      return "Organisor"
    }
    else if (value==2){
      return "Host"
    }
    else if(value==3){
      return "CrewMember"
    }
    else if(value==4){
      return "Techinal"
    }
    return "Other"
  }

}
