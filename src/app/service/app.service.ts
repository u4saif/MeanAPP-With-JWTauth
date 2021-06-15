import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BASE_URL='https://u4saif.herokuapp.com/api';
  LOGIN_BASE_URL="https://saifauth.herokuapp.com/api/";

  constructor(private http : HttpClient) { }
  
  login(data){
    return this.http.post(this.LOGIN_BASE_URL+'login',data);
  }
  showPost(){
    return   this.http.get(this.BASE_URL+'/post/count?limit=10'); 
  }

  addPost(data){
    return this.http.post<any>(this.BASE_URL+'/post', data);
  }

  deletPost(id){
    return  this.http.delete<any>(this.BASE_URL+'/delete/'+ id);
  }
}
