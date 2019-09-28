import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser } from '../models/newUser';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  registerUrl = 'http://localhost:8080/SupportForceBE/supportforce/register';
  loginUrl = 'http://localhost:8080/SupportForceBE/supportforce/login';

  users: User[] = [
    {
      userId: 1,
      username: 'jasonkim4201',
      password: 'password123',
      email: 'jasonkim4201@gmail.com'
    },
    {
      userId: 2,
      username: 'jyothit',
      password: 'password1234',
      email: 'jyothit@gmail.com'
    },
    {
      userId: 3,
      username: 'eboo1234',
      password: 'password12345',
      email: 'eboo@gmail.com'
    }
  ];

  constructor(private http: HttpClient) {

   }

  /* this method works but is not being used. was a test with a separate register form.
     actual code is in createNewUser and problem over registration came from spring side
  */
 /*  registerUser(newUser: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.registerUrl, newUser);
  } */

  /* insert new user */
  createNewUser(user: User): Observable<User> {
    console.log('this is my user object');
    console.log(user);
    return this.http.post<User>(this.registerUrl, user);
  }

  /* get user by username */
  myLogin(userLogin: User): Observable<User>  {
    console.log('this is my login user');
    console.log(userLogin);
    return this.http.post<User>(this.loginUrl, userLogin, {withCredentials: true});
  }



  }



