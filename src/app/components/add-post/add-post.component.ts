import { AppService } from 'src/app/service/app.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  formView:boolean = false;
  @Output() messageEvent= new EventEmitter<any>();

  constructor(private appService: AppService) { }
  form = new FormGroup({
  title: new FormControl('',[Validators.required]),
  discription:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }

  viewForm(){
    this.formView=true;
  }
  addPost(f){
    console.log(f);
    this.appService.addPost(f).subscribe(a=>{
      alert("data saved");
      this.appService.showPost().subscribe((data)=>{
        this.messageEvent.emit(data);
        this.formView=false;
      })
    });
  }
  close(){
    this.formView=false;
  }

}
