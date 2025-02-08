import { HttpStatusCode } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddGown } from 'src/app/Models/Guest/add-guest';
import { AppOrderResponse } from 'src/app/Models/payment';
import { GownService } from 'src/app/Services/gown.service';
import { PaymentService } from 'src/app/Services/payment.service';
import { environment } from 'src/environments/environment';
declare var Razorpay: any;
@Component({
  selector: 'app-gownlist',
  templateUrl: './gownlist.component.html',
  styleUrls: ['./gownlist.component.scss']
})
export class GownlistComponent implements OnInit {
  convocationId='';
  GownList!: AddGown[]
  baseUrl=environment.mainBaseUrl;
  appOrderResponse!:AppOrderResponse;
  showLoader: boolean = true;
  constructor(private service: GownService, private paymentService:PaymentService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe({
    next:(res)=>{
      this.convocationId= res['id'] ;
    }
   });

    this.service.getAllGowns().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.GownList=response.result
        }
       
      }
    })
}




options = {
  // May Get RazorPayKey from Backend api which is much safer
  key: environment.razorPayKey,
  amount:0,
  currency: 'INR',
  name: 'IUST Convocation',
  description:'',
  image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bikatadventures.com%2FHome%2FItinerary%2Fkashmir-great-lakes-trek&psig=AOvVaw3MYSOgV1zj8lwD_Mk8kYfi&ust=1694954929506000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDsuqeVr4EDFQAAAAAdAAAAABAD',
  order_id:  '',

 "handler":function (response:any){
  var event= new CustomEvent("payment.success",{detail:response,bubbles:true,cancelable:true});
  window.dispatchEvent(event);
 },

  prefill: {
    //using the prefill parameter to auto-fill customer's contact information, especially their phone number
    name: '',
    email: '',
    contact: '',
  },
  notes: {
    address: '',
  },
  theme: {
    color: '#3399cc',
  },
};
payInvoice(gownId:string){
  environment.fireConfirmSwal('Are you sure you want to book this gown').then(response=>{
    if(response.isConfirmed){
      this.paymentService.payInvoice(gownId, this.convocationId).subscribe({
        next: (response) => {
          //this.showLoader = false;
         if(!response.isSuccess){
          if(response.statusCode === HttpStatusCode.AlreadyReported){
            environment.fireErrorSwal('Payment already done')
          }
          return;
         }
         this.appOrderResponse=response.result;
          this.options.amount=this.appOrderResponse.amount;
          this.options.description= this.appOrderResponse.description;
          this.options.order_id=this.appOrderResponse.orderId;
    
          this.options.prefill.name= this.appOrderResponse.name;
          this.options.prefill.email= this.appOrderResponse.email;
          this.options.prefill.contact= this.appOrderResponse.contact;
    
          this.options.notes.address=this.appOrderResponse.address;
    
         this.payNow();
        },
        error: (err) => {
          console.log(err);
          this.showLoader = false;
        },
      });
    }
  })

  
}
payNow() {
  let rzp1=new Razorpay(this.options);
  rzp1.open()
  rzp1.on('payment.error',function(response:any){
      alert("errrrrrr");
  })
}


@HostListener('window:payment.success',['$event'])
onPaymentSuccess(response:any):void{
  let data=response.detail;
   let paymentOptions={
    razorpay_payment_id : data.razorpay_payment_id,
    razorpay_order_id:   data.razorpay_order_id,
    razorpay_signature:  data.razorpay_signature
   }
   this.paymentService.CapturePaymentDetails(paymentOptions).subscribe(res=>{
    environment.fireSuccessSwal("Payment done Successfully")
   })
}






}
