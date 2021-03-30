import { Component, OnInit } from '@angular/core';
import { RSVPDataService } from '../rsvp-shared/rsvp-data.service';
import { RSVP } from '../rsvp-shared/rsvp.model';
import { RSVPService } from '../rsvp-shared/rsvp.service';

@Component({
  selector: 'app-rsvp-viewer',
  templateUrl: './rsvp-viewer.component.html',
  styleUrls: ['./rsvp-viewer.component.scss']
})
export class RsvpViewerComponent implements OnInit {

  RSVPs : RSVP[]


  constructor(private rsvpService : RSVPService, private rsvpDataService: RSVPDataService) { }

 
  ngOnInit(): void {
    this.rsvpService.RetrieveAllRSVP();
    this.RSVPs = this.rsvpDataService.getRSVPs();
  }
  

}
