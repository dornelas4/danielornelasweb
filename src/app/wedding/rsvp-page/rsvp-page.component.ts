import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RSVPService } from '../rsvp-shared/rsvp.service';
@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.scss']
})
export class RsvpPageComponent implements OnInit {

  Arr : number[] = [];
  isAssisting = false;
  numPersonOptions = [1,2,3,4,5,6,7,8]
  numPersonSelected = 0;
  @ViewChild('f') signupForm : NgForm

  constructor(private rsvpService : RSVPService) { }

  ngOnInit(): void {
    
  }

  async onSubmitRSVPForm(){
    var data = this.signupForm.value;
    var emailKey = this.signupForm.value.userData.email.split("@")[0];
 
    this.rsvpService.retrieveRSVP(emailKey).subscribe(response =>{
      if (response == null || response == undefined){
        this.rsvpService.createAndStoreRSVP(emailKey,data)
      }
      else{
        for(var rsvpId in response){
          this.rsvpService.updateRSVP(emailKey,rsvpId,data);
        }
      }
    } );
    this.signupForm.reset();
    this.isAssisting = false;
    this.numPersonSelected = 0;
    alert("Gracias por tu confirmacion");
  }

  onSelectAssisting(){
    this.isAssisting= this.signupForm.value['attendance'] == "true" ? true : false;
  }
  onSelectNumPersons(){
    this.numPersonSelected = this.signupForm.value['numPersons'];
    this.Arr = new Array(this.numPersonSelected);
    for(var i = 0; i < this.numPersonSelected; i++){
      this.Arr[i] = i + 1;
    }
  }

  

  


}
