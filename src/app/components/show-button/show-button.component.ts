import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-button',
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.css']
})
export class ShowButtonComponent implements OnInit {
  PostData: Object;

  constructor(private http : HttpClient){

  }

  ngOnInit(): void {
  }
  showPost(){
    this.http.get('https://floating-caverns-53387.herokuapp.com/post').subscribe((data)=>{
      console.warn(data);
      this.PostData=data;
  });
  }
}
