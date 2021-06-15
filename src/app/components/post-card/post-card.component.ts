import { AppService } from 'src/app/service/app.service';
import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input("cardData") cardData;
  
  @Output() messageEvent= new EventEmitter<any>();
  constructor(private appService:AppService) { }

  ngOnInit(): void {
  }

  deletPost(id){
    let ans=confirm("Do you realy want to delete.")
      if (ans){
        this.appService.deletPost(id).subscribe(a=>{
          this.appService.showPost().subscribe((data)=>{
            this.messageEvent.emit(data);
          });
        });
     
      } 
  }
}
