import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designation'
})
export class DesignationPipe implements PipeTransform {

  transform(value: Number, ...args: unknown[]): any {
switch (value) {
case 1:"VC";
break;
case 2:"Dean";
break;
case 3:"HOD";
break;
case 4:"Registrar";
break;
case 5:"Dupty Registrar";
break;
case 6:"Professor";
break;
case 7:"Assitant Professor";
break;
case 8:"AssociateProfessor";
break;
case 9:"SeniorAssistant";
break;
case 10:"JuniorAssistant";
break;
case 11:"Helpers";
break;
default:

};
  }
}
