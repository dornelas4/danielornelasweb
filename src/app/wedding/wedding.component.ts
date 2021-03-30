import { Component, OnInit } from '@angular/core';
import { RSVPDataService } from './rsvp-shared/rsvp-data.service';
import { RSVPService } from './rsvp-shared/rsvp.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent implements OnInit {

  weddingDate = new Date("03/31/2023");
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  timer: any;

  compareDate = new Date("10/02/2021");



  timeBetweenDates(toDate) {


    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      // Timer done
      clearInterval(this.timer);

    } else {

      this.seconds = Math.floor(difference / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);

      this.hours %= 24;
      this.minutes %= 60;
      this.seconds %= 60;

    }
  }



  constructor() {
    
   }



  ngOnInit(): void {

      setInterval(() => this.timeBetweenDates(this.compareDate),1000);
      
    


  }

}
