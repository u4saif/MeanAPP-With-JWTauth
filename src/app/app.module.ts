import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ShowButtonComponent } from './components/show-button/show-button.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component'; 
import { TokenInterseptService } from './service/token-intersept.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowButtonComponent,
    PostCardComponent,
    AddPostComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterseptService, 
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
