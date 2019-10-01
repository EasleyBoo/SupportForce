import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser } from '../models/newUser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  BACKEND_URL = environment.BACKEND_URL;
  registerUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/register`;
  loginUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/login`;


  constructor(private http: HttpClient) {

   }

  /* insert new user */
  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user);
  }

  /* get user by username */
  myLogin(userLogin: User): Observable<User>  {
    return this.http.post<User>(this.loginUrl, userLogin, {withCredentials: true});
  }



}



