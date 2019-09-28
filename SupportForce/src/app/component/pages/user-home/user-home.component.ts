import { Component, OnInit } from '@angular/core';
import { SupportGroup } from '../../../models/supportgroup';
// import { SUPPORTGROUPS } from 'src/app/models/mock-supportgroups';
/* import { ALLSUPPORTGROUPS } from 'src/app/models/mock-allgroups'; */
// import { ALLSUPPORTGROUPS } from 'src/app/models/mock-allgroups';

// import { SgserviceService } from 'src/app/services/sgservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { GroupserviceService } from 'src/app/services/groupservice.service';




@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  // This returns an array of my support groups from service
  // supportgroup = SUPPORTGROUPS;
  mySupportGroup: SupportGroup[] = [];

  // This returns an array of all support groups from service
  allSupportGroup: SupportGroup[];





  filteredSupportGroups: SupportGroup[] = [];


  fileredInput = '';

  constructor(private userserv: UserserviceService, private groupServ: GroupserviceService,
    private forumServ: ForumserviceService) {

  }

  ngOnInit() {
    console.log('Im in init');
    this.allSupportGroup = this.userAllgroups();
    //this.allSupportGroup = this.groupServ.getAllGroups();
    // this.mySupportGroup = this.groupServ.getMyGroups();
    this.filteredSupportGroups = this.allSupportGroup;
  }

  get filterGroups(): string {

    return this.fileredInput;
  }

  // set filterGroups(input: string) {
  //   this.fileredInput = input;
  //   console.log(this.fileredInput);
  //   this.filteredSupportGroups = this.fileredInput ? this.filterGroupsByAddiction(this.fileredInput) : this.allSupportGroup;
  // }

  // filterGroupsByAddiction(query: string): SupportGroup[] {
  //   query = query.toLocaleLowerCase();
  //   return this.allSupportGroup.filter((groups: SupportGroup) =>
  //     groups.addiction.toLocaleLowerCase().indexOf(query) !== -1);
  // }
  /* s */

  // joinGroup(allgroups) {
  //   this.groupServ.updateMyGroup(allgroups);
  //   console.log(allgroups);
  // }

  userAllgroups(): SupportGroup[] {
    // let temp = [];
    this.groupServ.getAllGroups().subscribe(data => {
      console.log('this is my data');
      console.log(data);
      // temp.push(data);
      // console.log(temp);
      this.allSupportGroup = data;

      // temp.forEach(element => {
      //   this.allSupportGroup.push(element);
      //  console.log(element);
      // });
      // temp.forEach(element => {
      //   this.allSupportGroup.push(element);
      // });
      // this.allSupportGroup.push(data);;
      // this.allSupportGroup.push(data);
      // console.log('before return');
      // console.log(this.allSupportGroup);
      // console.log('this is temp' + temp);
      console.log('this is my support group');
      console.log(this.allSupportGroup);
    });
    return this.allSupportGroup;
  }

}






