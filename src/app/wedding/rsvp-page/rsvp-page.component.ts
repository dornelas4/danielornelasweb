import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.scss']
})
export class RsvpPageComponent implements OnInit {

  options = [1,2,3,4,5,6,7,8]
  @ViewChild('f') signupForm : NgForm

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
  }

  onSubmitRSVPForm(){
    

    var data = this.signupForm.value;
    var emailKey = this.signupForm.value.userData.email.split("@")[0];
    this.http.post(`https://danielornelasweb-default-rtdb.firebaseio.com/rsvp/${emailKey}.json`,data).subscribe(response => console.log(response));
    this.signupForm.reset();
  }

  

  


}
