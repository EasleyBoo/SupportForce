import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    const userSessionId = localStorage.getItem('userId');

    if (userSessionId !== null) {
      return true;
    } else {
      return false;
    }

  }

  destroySession() {
    localStorage.removeItem('userId');
    this.router.navigate(['']);
  }

}
