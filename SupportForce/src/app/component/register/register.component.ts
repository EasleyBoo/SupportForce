import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#registerEmail').value;
    const username = target.querySelector('#InputUserName').value;
    const password = target.querySelector('#InputPassword').value;
    console.log(email);
    console.log(username);
    console.log(password);
    const pwCheck = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{8,})');
    if (pwCheck.test(password)) {
      alert('u passed the check');
      // create a method within service to insert a new user into the database
    } else {
      alert('make better pw....');
      // failed basic requirements to fill out form so do nothing and maybe say you filled form wrong\

      return false;
    }
  }
}
