import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'module'
})
export class ModulePipe implements PipeTransform {

  transform(value:any){
    if(value==1){
      return "Student"
    }
    else if (value==2){
      return "Employee"
    }
    else if(value==3){
      return "Guest"
    }
    return "Unknown"
  }
  
}
