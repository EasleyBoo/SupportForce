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


  constructor(private http: HttpClient) {

   }

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



