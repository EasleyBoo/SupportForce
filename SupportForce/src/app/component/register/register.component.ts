import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { NewUser } from 'src/app/models/newUser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('closeBtn', {read: ElementRef, static: false}) closeBtn: ElementRef;

  user: User[];

  constructor(private userserv: UserserviceService) { }

  ngOnInit() {
  }

  /* registerUser(userForm: NgForm): void {
    // this.userserv.createNewUser(userForm.value);
    console.log(userForm.value);
    this.userserv.createNewUser(userForm.value).subscribe(data => {
      console.log(data);
    });
  } */

  registerUser(email, username, password) {

    console.log(email);
    console.log(username);
    console.log(password);
    this.userserv.createNewUser({email, password, username} as User).subscribe(data => {
      console.log(data);
    });
  }

  


}
