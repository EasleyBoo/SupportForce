import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { NgForm } from '@angular/forms';
import { SupportGroup } from 'src/app/models/supportgroup';
import { GroupserviceService } from 'src/app/services/groupservice.service';

@Component({
  selector: 'app-groupcreationform',
  templateUrl: './groupcreationform.component.html',
  styleUrls: ['./groupcreationform.component.css']
})
export class GroupcreationformComponent implements OnInit {
  tempVar: SupportGroup;
  constructor(private forumServ: ForumserviceService, private groupServ: GroupserviceService) { }

  ngOnInit() {
  }

  // createGroup(newGroup: NgForm) {
  //   this.tempVar = this.groupServ.myNewGroup(newGroup.value);
  //   console.log('hi jyothi this is jason');
  //   console.log(this.tempVar);
  //   console.log(this.groupServ.mySupportGroup);
  // }

}
