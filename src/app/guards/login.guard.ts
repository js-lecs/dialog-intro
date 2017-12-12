
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let bool = localStorage.getItem('loggedIn') === 'true';
        // alert("You are not authorized")
        return bool;
    }


}