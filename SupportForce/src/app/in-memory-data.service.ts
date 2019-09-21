import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { SupportGroup } from 'src/app/models/supportgroup';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const groups = [
      {
          supportId: 1,
          supportName: 'Alcohol for days',
          userList: ['Jason', 'Jyothi', 'Easley'] ,
          addiction: 'Alcohol',
        },
        {
          supportId: 2,
          supportName: 'Cocaine for days',
          userList: ['Jack', 'Henry', 'Katie'] ,
          addiction: 'Cocaine',
        },
        {
          supportId: 3,
          supportName: 'Gambling for days',
          userList: ['Water', 'Pepsi', 'Jason'] ,
          addiction: 'Gambling',
        },
        {
          supportId: 4,
          supportName: 'Meth for days',
          userList: ['Jason', 'Pen', 'Snickers'] ,
          addiction: 'Meth',
        },
        {
          supportId: 5,
          supportName: 'Pain Killers for days',
          userList: ['Starbucks', 'Panera', 'Easley'] ,
          addiction: 'Pain Killers',
        },
        {
          supportId: 6,
          supportName: 'Nicotine for days',
          userList: ['Sprite', 'Paper', 'Jason'] ,
          addiction: 'Nicotine',
        },
        {
          supportId: 7,
          supportName: 'Heroine for days',
          userList: ['Sprite', 'Paper', 'Jason'] ,
          addiction: 'Heroine',
        },
  ];
    return {groups};
  }

  constructor() { }
}
