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

  myGroupUrl = 'http://localhost:8080/SupportForceBE/supportforce/getUserSupportGroups';

  createGroupUrl = 'http://localhost:8080/SupportForceBE/supportforce/createSupportGroup';

  constructor(private http: HttpClient) { }

  getMyGroups(temp): Observable<SupportGroup[]> {
    console.log('in my get groups');
    console.log(temp);
    return this.http.get<SupportGroup[]>(this.myGroupUrl + temp);
  }

  getAllGroups(): Observable<SupportGroup[]> {
    return this.http.get<SupportGroup[]>(this.AllGroupUrl);

  }

  myNewGroup(newGroup: SupportGroup, tempId): Observable<SupportGroup[]> {
    console.log('Your in the Newgroup within service layer' + tempId);
    console.log('Your newGroup is ' + newGroup);
    return this.http.post<SupportGroup[]>(this.createGroupUrl + tempId, {newGroup, tempId});
  }




  //  myNewGroup(newGroup: SupportGroup): SupportGroup {
  //    console.log(this.users);
  //    this.mySupportGroup.push(newGroup);
  //    console.log('This is my new Support Group' + this.mySupportGroup);

  //   this.tempGroup = newGroup;

  //   console.log('This is my tempGroup');
  //    console.log(this.tempGroup);
  //    return this.tempGroup;
  //  }

  // updateMyGroup(joinGroup): void {
  //   this.mySupportGroup.push(joinGroup);

  // }



}
