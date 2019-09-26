import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';

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

  // getRegisterInfo(event) {
  //   event.preventDefault();
  //   const target = event.target;
  //   const email = target.querySelector('#registerEmail').value;
  //   const username = target.querySelector('#InputUserName').value;
  //   const password = target.querySelector('#InputPassword').value;
  //   console.log(email);
  //   console.log(username);
  //   console.log(password);
  //   const pwCheck = new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{8,})');
  //   if (pwCheck.test(password)) {
  //     alert('u passed the check');
  //     this.user.push(email, username, password);
  //     console.log(this.user);
  //   } else {
  //     alert('make better pw....');
  //     // failed basic requirements to fill out form so do nothing and maybe say you filled form wrong\

  //     return false;
  //   }
  // }


  registerUser(userForm: NgForm): void {
    this.userserv.createNewUser(userForm.value);
    console.log(userForm.value);
    /* this.closeModal(); */
  }

  closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

}
