import { Component, OnInit } from '@angular/core';
import { SupportGroup } from '../../../models/supportgroup';
import { SUPPORTGROUPS } from 'src/app/models/mock-supportgroups';
import { ALLSUPPORTGROUPS } from 'src/app/models/mock-allgroups';
import { SgserviceService } from 'src/app/services/sgservice.service';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})

export class UserHomeComponent implements OnInit {

 supportgroup = SUPPORTGROUPS;
//  allsupportgroups = ALLSUPPORTGROUPS;
allsupportgroups: SupportGroup[];

  constructor(private sgservice: SgserviceService) {
    console.log(this.supportgroup);
    // console.log(this.allsupportgroups);
  }

  ngOnInit() {
    this.getallgroups();
  }


  getallgroups(): void {
    this.sgservice.getallgroups().subscribe(allsupportgroups => this.allsupportgroups = allsupportgroups);
  }

}
