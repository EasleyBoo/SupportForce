import { Injectable } from '@angular/core';
import { SupportGroup } from 'src/app/models/supportgroup';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupserviceService {
  AllGroupUrl = 'http://localhost:8080/SupportForceBE/supportforce/getAllSupportGroups';
  users: User[] = [
    {
      userId: 1,
      username: 'jasonkim4201',
      password: 'password123',
      email: 'jasonkim4201@gmail.com'
    },
    {
      userId: 2,
      username: 'jyothit',
      password: 'password1234',
      email: 'jyothit@gmail.com'
    },
    {
      userId: 3,
      username: 'eboo1234',
      password: 'password12345',
      email: 'eboo@gmail.com'
    }
  ];


  myarr = [];
  // tempGroup: SupportGroup = {
  //   supportName: '',
  //   addiction: null,
  //   userList: null
  // };

  


  constructor(private http: HttpClient) { }



  // getMyGroups(): SupportGroup[] {
  //   return this.mySupportGroup;
  // }

  getAllGroups(): Observable<SupportGroup[]> {
    return this.http.get<SupportGroup[]>(this.AllGroupUrl);

  }



  // getAllGroups(): SupportGroup[] {
  //   return this.allGroups;
  // }
  // myNewGroup(newGroup: SupportGroup): SupportGroup {
  //   console.log(this.users);
  //   this.mySupportGroup.push(newGroup);
  //   console.log('This is my new Support Group' + this.mySupportGroup);

  //   this.tempGroup = newGroup;

  //   console.log('This is my tempGroup');
  //   console.log(this.tempGroup);
  //   return this.tempGroup;
  // }

  // updateMyGroup(joinGroup): void {
  //   this.mySupportGroup.push(joinGroup);

  // }



}
