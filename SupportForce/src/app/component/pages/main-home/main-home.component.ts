import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor(private userService: UserserviceService) { }

  ngOnInit() {

  }


}