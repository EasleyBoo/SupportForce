import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { USERS } from '../models/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = USERS;

  constructor() {

  }

  /* getUserDetails(username, password): Observable<UserCreds[]> {
    // check to see if infomation matches
    const userInfo: UserCreds[] = [];
    console.log('inUserDetails');
    console.log(username);
    console.log(password);

    this.userInfo.forEach(user => {

      console.log(user);
      if (user.userId === username && user.password === password) {
        console.log('uname and pass good...');
        userInfo.push(user);
        console.log('useringfo');
        console.log(userInfo);
        return userInfo;
      }
    });
    console.log('hey its going to be null');
    return null;
  } */


}
