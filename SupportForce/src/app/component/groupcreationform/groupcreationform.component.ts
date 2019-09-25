import { Component, OnInit } from '@angular/core';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-groupcreationform',
  templateUrl: './groupcreationform.component.html',
  styleUrls: ['./groupcreationform.component.css']
})
export class GroupcreationformComponent implements OnInit {

  constructor(private forumServ: ForumserviceService) { }

  ngOnInit() {
  }

  createGroup(newGroup: NgForm) {
    this.forumServ.myNewGroup(newGroup.value);

  }

}
