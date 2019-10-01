import { Component, OnInit, DoCheck } from '@angular/core';
import { SupportGroup } from '../../../models/supportgroup';

// import { SgserviceService } from 'src/app/services/sgservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { GroupserviceService } from 'src/app/services/groupservice.service';
import { LoginComponent } from '../../login/login.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit, DoCheck {

  loading: boolean;

  // This returns an array of my support groups from service
  // supportgroup = SUPPORTGROUPS;
  mySupportGroup: SupportGroup[];

  // This returns an array of all support groups from service
  allSupportGroup: SupportGroup[];
  filteredSupportGroups: SupportGroup[];
  defaultGroups: SupportGroup[] = [];
  fileredInput = '';

  constructor(private userserv: UserserviceService, private groupServ: GroupserviceService,
              private forumServ: ForumserviceService) {
  }

  ngOnInit() {
    console.log('Im in init');
    this.loading = true;
    this.allSupportGroup = this.userAllgroups();
    this.filteredSupportGroups = this.allSupportGroup;
    // this.allSupportGroup = this.groupServ.getAllGroups();
    this.mySupportGroup = this.myGroups();
  }

  /* caused infinate look oops */
  ngDoCheck() {
    /* this.mySupportGroup = this.myGroups();
    this.allSupportGroup = this.userAllgroups(); */
  }

  get filterGroups(): string {
    return this.fileredInput;
  }

  set filterGroups(input: string) {
    this.fileredInput = input;
    console.log(this.fileredInput);
    this.filteredSupportGroups = this.fileredInput ? this.filterGroupsByAddiction(this.fileredInput) : this.allSupportGroup;
  }

  filterGroupsByAddiction(query: string): SupportGroup[] {
    query = query.toLocaleLowerCase();
    return this.allSupportGroup.filter((groups: SupportGroup) =>
      groups.addict.addictionName.toLocaleLowerCase().indexOf(query) !== -1);
  }


  userAllgroups(): SupportGroup[] {
    this.groupServ.getAllGroups().subscribe(data => {
      console.log('this is my data');
      console.log(data);
      this.allSupportGroup = data;

      console.log(this.allSupportGroup);
      this.loading = false;
    });
    return this.allSupportGroup;
  }

  myGroups(): SupportGroup[] {
    let temp;
    // console.log(JSON.parse(localStorage.getItem('userId')));
    temp = localStorage.getItem('userId');
    console.log(temp);
    this.groupServ.getMyGroups(temp).subscribe(data => {
      this.mySupportGroup = data;
    });
    return this.mySupportGroup;
  }

  displayAddedGroup(addedGroup: SupportGroup) {
    this.mySupportGroup.push(addedGroup);
    this.allSupportGroup.push(addedGroup);
  }

  joinGroup(joinGroupFm: NgForm) {
    let userId;
    userId = localStorage.getItem('userId');
    this.groupServ.joinGroupServ(joinGroupFm.value, userId).subscribe(data => {
    //  console.log(data);
    this.mySupportGroup.unshift(data);
    });
  }

  leaveGroup(leaveGroupFm: NgForm) {
    let userId;
    userId = localStorage.getItem('userId');
    this.groupServ.leaveGroupServ(leaveGroupFm.value, userId).subscribe(data => {
    //  console.log(data);
    this.mySupportGroup = this.mySupportGroup.filter(groups => groups.supportGroupId !== data.supportGroupId);
    leaveGroupFm.reset();
    });
  }

}




