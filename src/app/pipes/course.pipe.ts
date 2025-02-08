import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    switch(value){
      case 1: return "MCA";
      case 2: return "MSCIT";
      case 3: return "MBA";
      case 4: return "IMBA";
      case 5: return "JMC";
      case 6: return "MSC Statistics";
      case 7: return "MSC Physics";
      case 8: return "MSC Chemistry";
      case 9: return "MTech Food Technology";
      case 10: return "BSC Nursing";
      case 11: return "CE";
      case 12: return "ME";
      case 13: return "ECE";
      case 14: return "CSE";
      case 15: return "EE";
      default:
    }
    return "";
  }

}


 