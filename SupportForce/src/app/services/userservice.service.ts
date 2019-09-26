import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  

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

  constructor() { }


  createNewUser(newUser: User) {
    console.log('This is in service' + newUser);
    this.users.push(newUser);
    console.log(this.users);

    // this is where the HTTP request will go after we import the HTTP into our service
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
