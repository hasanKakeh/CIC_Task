import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new Subject();
  constructor(private route: Router) {}
  login(name: string) {
    localStorage.setItem('user', name);
    this.user$.next(name);
    this.route.navigate(['./cities']);
  }
  getUser$() {
    return this.user$.asObservable();
  }
  isLogin() {
    return localStorage.getItem('user') ? true : false;
  }
  logout() {
    localStorage.removeItem('user');
    this.user$.next(null);
    this.route.navigate(['./login']);
  }
  checkOfStorage() {
    const user = localStorage.getItem('user');
    if (user) this.user$.next(user);
  }
}
