import { ImplicitReceiver } from '@angular/compiler';
import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService} from './auth-guard.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}

    canActivate(): boolean{
        if(this.authService.isAuthenticated()){
            return true;
        }else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}