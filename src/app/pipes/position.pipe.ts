import { Pipe, PipeTransform } from '@angular/core';
import { Position } from '../Enums/enums';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value: Position, ...args: unknown[]): unknown {
    if(value==1){
      return "Gold"
    }
    else if (value==2){
      return "Silver"
    }
    else if(value==3){
      return "Bronze"
    }
    return "Unknown"
  }
  }

