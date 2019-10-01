import { Injectable } from '@angular/core';
import { SupportGroup } from 'src/app/models/supportgroup';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GroupserviceService {

  BACKEND_URL = environment.BACKEND_URL;
  AllGroupUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/getAllSupportGroups`;
  myGroupUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/getUserSupportGroups`;
  createGroupUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/createSupportGroup`;
  joinGroupUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/joinSupportGroup`;
  leaveGroupUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/leaveSupportGroup`;

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
    return this.http.post<SupportGroup[]>(this.createGroupUrl + tempId, newGroup);
  }

  joinGroupServ(joinGroupFm, userId): Observable<SupportGroup> {
    console.log('Your in the Join group within the group service');
    return this.http.post<SupportGroup>(this.joinGroupUrl + userId, joinGroupFm);
  }

  leaveGroupServ(leaveGroupFm, userId): Observable<SupportGroup>{
    console.log('Your in the Leave Group within the group service');
    return this.http.post<SupportGroup>(this.leaveGroupUrl + userId, leaveGroupFm );
  }


}
