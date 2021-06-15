import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  isLoading:boolean=true;
  postData=[];
  
  receiveMsg(event){
    this.postData=event
    this.isLoading=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
