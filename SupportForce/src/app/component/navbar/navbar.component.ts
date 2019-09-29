import { Component, OnInit, DoCheck } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  isLoggedin: boolean;

  constructor(private sessionServ: SessionService) { }

  ngOnInit() {
    this.isLoggedin = this.sessionServ.isLoggedIn();
  }

  ngDoCheck() {
    this.isLoggedin = this.sessionServ.isLoggedIn();
  }
  onClickMe() {

  }

  logOut() {
    this.sessionServ.destroySession();
  }


}
