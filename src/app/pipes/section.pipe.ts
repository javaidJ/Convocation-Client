import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'section'
})
export class SectionPipe implements PipeTransform {

  transform(value:any){
    if(value==1){
      return "A"
    }
    else if(value==2){
      return "B"
    }
    else if(value==3){
      return "C"
    }
    return "D"
  }
  

}
