import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }
  form = new FormGroup({
  uname: new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }

  login(data){
    
    this.appService.login(data).subscribe(a=>{
      localStorage.setItem("token",a["token"]);
      this.router.navigate(['/home']);
    });
  }
  clearAll(){
    this.form.get('password').setValue("");
    this.form.get('uname').setValue("");
  }
}
