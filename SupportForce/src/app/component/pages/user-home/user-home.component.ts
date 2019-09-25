import { Component, OnInit } from '@angular/core';
import { SupportGroup } from '../../../models/supportgroup';
// import { SUPPORTGROUPS } from 'src/app/models/mock-supportgroups';
// import { ALLSUPPORTGROUPS } from 'src/app/models/mock-allgroups';
// import { SgserviceService } from 'src/app/services/sgservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';




@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

  // This returns an array of my support groups from service
  // supportgroup = SUPPORTGROUPS;
  mySupportGroup: SupportGroup[];

  // This returns an array of all support groups from service
  allSupportGroups: SupportGroup[];



  constructor(private userserv: UserserviceService) {


  }

  ngOnInit() {
    console.log('Im in init');
    this.allSupportGroups = this.userserv.getAllGroups();
    this.mySupportGroup = this.userserv.getMyGroups();
    console.log(this.mySupportGroup);
  }


}
