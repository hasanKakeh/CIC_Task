import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any;
  constructor(private _us: UserService) {}
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this._us.getUser$().subscribe((value) => {
      this.user = value;
    });
    this._us.checkOfStorage();
  }
  logout() {
    this._us.logout();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
