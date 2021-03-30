import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { RSVPDataService } from './rsvp-data.service';
import { map, tap } from 'rxjs/operators';
import { RSVP } from './rsvp.model';

@Injectable({providedIn: 'root'})
export class RSVPService{

    constructor(private http : HttpClient, private rsvpDataService : RSVPDataService){}

    createAndStoreRSVP(emailKey: string, data : any){
        this.http.post(`https://danielornelasweb-default-rtdb.firebaseio.com/rsvp/${emailKey}.json`,data).subscribe();
    }
    
    retrieveRSVP(emailKey: string){
        var rsvpData;
        var subject = new Subject<any>();
        this.http.get(`https://danielornelasweb-default-rtdb.firebaseio.com/rsvp/${emailKey}.json`).subscribe(response => {
            rsvpData = response;
            subject.next(rsvpData);
        });
        return subject.asObservable();
    }

    updateRSVP(emailKey: string, rsvpId : string,data: any){
        this.http.put(`https://danielornelasweb-default-rtdb.firebaseio.com/rsvp/${emailKey}/${rsvpId}.json`,data).subscribe(response => {
        });
    }

    RetrieveAllRSVP(){
        return this.http.get<RSVP[]>(`https://danielornelasweb-default-rtdb.firebaseio.com/rsvp.json`)
        .pipe(
            map(rsvps => {
            console.log(rsvps);
            var mappedRSVP : RSVP[] = [];
            for(var k in rsvps){
                var dbRecord = rsvps[k];
                for(var id in dbRecord){
                    var rsvp = dbRecord[id];
                    console.log(rsvp)
                    var newRSVP = new RSVP(rsvp['userData']['name'],rsvp['userData']['email'],rsvp['attendance'] == 'true' ? true : false);
                    newRSVP.message = rsvp['message'] ? rsvp['message'] : '';
                    if(newRSVP.attendance){
                        newRSVP.numPersons = rsvp['numPersons']
                        var persons = rsvp['assistingPeople'];
                        var personsArray = []
                        for(var person in persons){
                            personsArray.push(persons[person]);
                        }
                        newRSVP.assistingPeople = personsArray;
                    }
                }
                mappedRSVP.push(newRSVP);
            }
            return mappedRSVP;
        }),
            tap(RSVPs => {
                this.rsvpDataService.setRSVPs(RSVPs);
            })
        );
    }
       

}