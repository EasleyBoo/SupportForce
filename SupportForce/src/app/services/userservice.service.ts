import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewUser } from '../models/newUser';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  postUrl: string = 'http://localhost:8080/SupportForceBE/supportforce/register';

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


 /*  createNewUser(newUser: User): Observable<User> {
  

    const httpPut = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const testNewUser = {
      email: 'test@gmail.com',
      password: 'password12345',
      username: 'testuserpleaseignore'
    };

    // this is where the HTTP request will go after we import the HTTP into our service
    return this.http.post<User>('http://localhost:8080/SupportForceBE/supportforce/register',
     {
       email: newUser.email,
       password: newUser.password,
       username: newUser.username
     }, httpPut);
  } */

  createNewUser(user: User): Observable<User> {
    /* const httpPut = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }; */
    return this.http.post<User>(this.postUrl, {
      username: user.username,
      password: user.password,
      email: user.email
    });
  }

  registerUser(newUser: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.postUrl, newUser);
  }

  myLogin(userLogin: User) {
    this.users.forEach(user => {
      console.log(userLogin.password);
      if (user.username === userLogin.username && user.password === userLogin.password) {
        console.log(userLogin.password);
        console.log('yay');
      } else {
        console.log('u failed');
      }
    });

  }




}
