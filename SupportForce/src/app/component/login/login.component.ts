import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { USERS } from 'src/app/models/mock-users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allUsers = USERS;


  constructor(private authService: AuthService) { 

  }

  ngOnInit() {

  }

  loginUser(event): void {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#userLogin').value;
    const password = target.querySelector('#userPass').value;

    this.allUsers.forEach(user => {

      if (user.username === username && user.password === password) {
        console.log(user.password);
        console.log(user.username);
        console.log('The user name and password is correct');
        return true;
      }

    });
    console.log('username and password is incorrect');



    // call a method to pass in username and password to validate
    // this.authService.getUserDetails(username, password).subscribe(users => this.allUsers = users);
  }


}
