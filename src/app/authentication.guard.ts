import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAllowed = false;
    
    if (window.localStorage.getItem("token")) {
        isAllowed = true;
        return isAllowed;
    }

    this.router.navigate(['/login']);
    return isAllowed;
}
  
}
