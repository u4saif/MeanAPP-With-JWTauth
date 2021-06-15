import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterseptService implements HttpInterceptor {
 
  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    if (localStorage.getItem("token")) {
      let token= "bearerToken "+ localStorage.getItem("token");
      const RequestWithToken = req.clone({
        
        headers: req.headers.set('Authorization', token),
      });
      return next.handle(RequestWithToken);
    }
    return next.handle(req);
  
}
}
 
 
