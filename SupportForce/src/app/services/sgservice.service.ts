import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SupportGroup } from '../models/supportgroup';
import { ALLSUPPORTGROUPS } from '../models/mock-allgroups';


@Injectable({
  providedIn: 'root'
})

export class SgserviceService {

  constructor() {}

  getallgroups(): Observable<SupportGroup[]> {
    console.log(ALLSUPPORTGROUPS);
    return of(ALLSUPPORTGROUPS);
  }
}
