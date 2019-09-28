import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('userId')) {
      console.log(`MY ID: ${localStorage.getItem('userId')}`);
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }


}
