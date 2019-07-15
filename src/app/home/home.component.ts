import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Addresss;
  hobbies:string[];
  posts: Post[];
  isEdit: boolean= false;
  
    constructor() { }
    displayName = true;
    mgs = "";
    
    ngOnInit() {
      console.log("Initit ran...");
  
      this.name = 'Vivek Chaturvedi';
      this.age = 30;
      this.email = 'vivek@gmail.com';
       this.address = {
        city :"Noida",
        state : 'Uttar Pradesh',
        country : 'India'
       };
      this.hobbies=['Cricket','Football','ballyball'];    
    
    }
    
    onClick(){
    console.log("Hello")
    this.name ='Nishant Chaubey';
    this.hobbies.push('Batmintal as a hobby');
    }
  
    addHobby(hobby){
      console.log(hobby);      
      if(hobby.length==0)
      {
        return false;
      }
      else
      {
      this.hobbies.unshift(hobby);      
      return false;
      }
    }
  
    deleteHobby(hobby){
      console.log(hobby);
      for(let i =0; i<this.hobbies.length; i++ ){
        if(this.hobbies[i] == hobby ){
          this.hobbies.splice(i, 1);
        }
    }
  }
  
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }


  getclick(){
    console.log('This is console message!')
    this.mgs = "Welcome to vivek! Your message successfully printed";
  }
  
  }
  

  interface Addresss{
      city:string;
      state:string;
      country:string;
    }
  
interface Post{
      id: number;
      title: string;
      body:string;
      userId:number;
}
