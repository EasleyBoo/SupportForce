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
  usersGroup: SupportGroup;
  @Output() createdGroup: EventEmitter<SupportGroup[]> = new EventEmitter();

  constructor(private forumServ: ForumserviceService, private groupServ: GroupserviceService) { }

  ngOnInit() {
  }

  createGroup(newGroup: NgForm) {
    let tempId;
    tempId = localStorage.getItem('userId');

    this.groupServ.myNewGroup(newGroup.value, tempId).subscribe(data => {
      this.createdGroup.emit(data);
      newGroup.resetForm();
    });
  }

}
