import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    login() {
        this.isLoggedIn = true;
        sessionStorage.setItem('isLoggedIn', 'true')
    }

    logout(){
        this.isLoggedIn = false;
        sessionStorage.removeItem('isLoggedIn')
    }

    isAuthenticated():boolean{
        let getItem = sessionStorage.getItem('isLoggedIn') == 'true' ?true: false ;
        return getItem;
    }
}