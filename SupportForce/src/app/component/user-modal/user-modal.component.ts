import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SupportGroup } from 'src/app/models/supportgroup';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  addedUserGroup: SupportGroup[];
  @Output() userCreatedGroup: EventEmitter<SupportGroup[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newUsersGroup(myUserGroup: SupportGroup[]) {
    this.userCreatedGroup.emit(myUserGroup);
  }
}
