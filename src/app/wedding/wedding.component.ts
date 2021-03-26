import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {
 
  weddingDate = new Date("03/31/2023");
 

  constructor() { }

  

  ngOnInit(): void {
   


  }

}
