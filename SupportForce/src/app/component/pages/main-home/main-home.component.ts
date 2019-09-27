import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor(private userService: UserserviceService) { }

  ngOnInit() {
  }

  // this was an experimental form to register. it works pretty well! and i used it with interface. turns out acutal
  // issue was in the backend
  
 /*  onSubmit(emails, usernames, passwords) {
    console.log(emails, usernames, passwords);
    this.userService.registerUser({
      email: emails,
      username: usernames,
      password: passwords
    }).subscribe(data => {
      console.log(data);
    });
  } */

}