import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
    
    constructor (private authenticationService: AuthenticationService, private router: Router) {}

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        
        if(this.authenticationService.isAuthenticated()) {
            return true;
        }

        this.router.navigate([ '/users/login' ]);
        return false;
    }
}
