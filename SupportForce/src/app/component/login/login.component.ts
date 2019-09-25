import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userserv: UserserviceService) {

  }

  ngOnInit() {

  }

  loginUser(userLogin: NgForm) {
    this.userserv.myLogin(userLogin.value);
    }





  // loginUser(event): void {
  //   event.preventDefault();
  //   const target = event.target;
  //   const username = target.querySelector('#userLogin').value;
  //   const password = target.querySelector('#userPass').value;

  //   this.allUsers.forEach(user => {

  //     if (user.username === username && user.password === password) {
  //       console.log(user.password);
  //       console.log(user.username);
  //       console.log('The user name and password is correct');
  //       return true;
  //     }

  //   });
  //   console.log('username and password is incorrect');



  //   // call a method to pass in username and password to validate
  //   // this.authService.getUserDetails(username, password).subscribe(users => this.allUsers = users);
  // }


}
