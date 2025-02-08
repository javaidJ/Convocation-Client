import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'participantRole'
})
export class ParticipantRolePipe implements PipeTransform {

  transform(value:any){
    if(value==1){
      return "Singer"
    }
    else if (value==2){
      return "Poet"
    }
    else if(value==3){
      return "Dancer"
    }
    else if(value==4){
      return "StandUpComedian"
    }
    else if(value==5){
      return "MoralSpeech"
    }
    else if(value==6){
      return "GeneralSpeech"
    }
    else if(value==7){
      return "Drama"
    }
    else if(value==8){
      return "CheifGuest"
    }
    else if(value==9){
      return "Guest"
    }
    else if(value==10){
      return "Audiance"
    }
    else if(value==11){
      return "Nominee"
    }
    return "Others"
  }
  }

