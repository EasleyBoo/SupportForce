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
    return this.http.get<SupportGroup[]>(this.myGroupUrl + temp);
  }

  getAllGroups(): Observable<SupportGroup[]> {
    return this.http.get<SupportGroup[]>(this.AllGroupUrl);

  }

  myNewGroup(newGroup: SupportGroup, tempId): Observable<SupportGroup[]> {
    return this.http.post<SupportGroup[]>(this.createGroupUrl + tempId, newGroup);
  }

  joinGroupServ(joinGroupFm, userId): Observable<SupportGroup> {
    return this.http.post<SupportGroup>(this.joinGroupUrl + userId, joinGroupFm);
  }

  leaveGroupServ(leaveGroupFm, userId): Observable<SupportGroup>{
    return this.http.post<SupportGroup>(this.leaveGroupUrl + userId, leaveGroupFm );
  }


}
