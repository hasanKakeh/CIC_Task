import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _us: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLogged = this._us.isLogin();
    if (route.routeConfig?.path == 'login') {
      if (isLogged) {
        this.router.navigate(['./cities']);
      }
      return !isLogged;
    } else {
      if(!isLogged)
      this.router.navigate(['./login']);
      return isLogged;
    }
  }
}
