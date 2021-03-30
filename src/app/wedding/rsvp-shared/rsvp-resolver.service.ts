import { Injectable } from "@angular/core";
import { RSVP } from "./rsvp.model";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { RSVPDataService } from "./rsvp-data.service";
import { RSVPService } from "./rsvp.service";

@Injectable({providedIn: 'root'})
export class RSVPResolverService implements Resolve<RSVP[]>{
    constructor(private rsvpService: RSVPService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.rsvpService.RetrieveAllRSVP();
    }
}