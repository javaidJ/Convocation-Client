import { AppStatusPayment } from "../Enums/app-status-payment";
import { Course, Position } from "../Enums/enums";
import { GownSize } from "../Enums/gown-size";
import { GownStatus } from "../Enums/gown-status";
import { AppOrderStatus } from "../Enums/order-status";
import { PaymentMethod } from "../Enums/payment-method";

export class GownResponse {
    public createdOn!:string;
    public id!:string;
    public filePath!:string;
    public color!:string;
    public quantity!:number;
    public size!:number;
    public charges!:number;
}

export class GownBookingResponse{
    public gownId!:string;
    public color!:string;
    public size! : GownSize;
    public quantity!:number;
    public charges!:number;
    public paymentDate!:string;
    public filePath!:string;
    public gownStatus!:GownStatus;
    public userId!:string;
    public receipt!:string;
    public currency!:string;
    public orderStatus!:AppOrderStatus;
    public transactionId!:string;
    public amount!:number;
    public paymentMethod!:PaymentMethod;
    public appPaymentStatus!:AppStatusPayment;
    public convocationName!:string;
    public description!:string;
    public convocationDate!:string;
}


export class StudentGownBookingsResponse
{
    public gownId!:string;
    public color!:string;
    public size! : GownSize;
    public quantity!:number;
    public charges!:number;
    public paymentDate!:string;
    public filePath!:string;
    public gownStatus!:GownStatus;
    public userId!:string;
    public receipt!:string;
    public currency!:string;
    public orderStatus!:AppOrderStatus;
    public transactionId!:string;
    public amount!:number;
    public paymentMethod!:PaymentMethod;
    public appPaymentStatus!:AppStatusPayment;
    public convocationId!:string;
    public name!:string;
    public contactNo! : GownSize;
    public email!:number;
    public batch!:number;
    public course!:Course;
    public position!:Position;
    public regNumber!:string;
    public parentage!:string;
  
}