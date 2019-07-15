import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codevolution',
  templateUrl: './codevolution.component.html',
  styleUrls: ['./codevolution.component.css']
})
export class CodevolutionComponent implements OnInit {
  displayName = true;
  mgs = "";
  getclick(){
    console.log('This is console message!')
    this.mgs = "Welcome to vivek! Your message successfully printed";
  }
  //for switch case
color= "red";

//for ngFor directives
colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit() {
  }

}
