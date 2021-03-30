import { RSVP } from "./rsvp.model";
import { Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RSVPDataService{
    private RSVPs :RSVP[] = [];

    getRSVPs(){
        return this.RSVPs.slice();
    }
    setRSVPs(rsvps : RSVP[]){
        this.RSVPs = rsvps;
    }


}