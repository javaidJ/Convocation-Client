import { Pipe, PipeTransform } from '@angular/core';
import { AppOrderStatus } from '../Enums/order-status';

@Pipe({
  name: 'appPaymentStatus'
})
export class AppPaymentStatusPipe implements PipeTransform {

  transform(value: AppOrderStatus, ...args: unknown[]): unknown {
    switch(value){

      case 1: return "Created";
      case 2: return "Attempted";
      case 3: return "Paid";
      default:
    }
    return "";
  }

}
