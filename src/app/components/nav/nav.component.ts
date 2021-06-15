import { AppService } from 'src/app/service/app.service';
import { Component, EventEmitter, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoading:boolean=false;

  @Output() messageEvent= new EventEmitter<any>();

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }
  showPost(){
    this.isLoading=true;
    this.service.showPost().subscribe((data)=>{
      this.messageEvent.emit(data);
      this.isLoading=false;  
    },
    (error) => {                              
      alert("Please Login Again your session expired");
      console.log(error);
      this.isLoading=false;
    })
   
  }


}
