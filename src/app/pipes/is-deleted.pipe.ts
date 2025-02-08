import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDeleted'
})
export class IsDeletedPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if(value == true){
     return "Yes"
    }
    return "No"
  }

}
