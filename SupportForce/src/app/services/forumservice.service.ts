import { Injectable } from '@angular/core';
import { SupportGroup } from '../models/supportgroup';



@Injectable({
  providedIn: 'root'
})
export class ForumserviceService {


  myarr = [];
  tempGroup: SupportGroup = {
    supportName: '',
    addiction: null
  };

  mySupportGroup: SupportGroup[] = [
    {
      supportId: 1,
      supportName: 'Alcohol for days',
      userList: ['Jason', 'Jyothi', 'Easley'],
      postList: [{
        postId: 1, postBody: 'Im so sad because of this....',
        userId: 1
      }, { postId: 2, postBody: 'hey does this work', userId: 1 }],
      replyList: [{ replyId: 1, replyBody: 'This is my reply to sadness :(', postId: 1, userId: 2 },
      { replyId: 2, replyBody: 'Keep on drinking!', postId: 1, userId: 1 }],
      addiction: '1',
    },
    {
      supportId: 2,
      supportName: 'Cocaine for days',
      userList: ['Jack', 'Henry', 'Katie'],
      postList: [{ postId: 5, postBody: 'Alcohol is my gateway to freedom...', userId: 2 },
      { postId: 4, postBody: 'Cocaine is not good', userId: 2 }],
      replyList: [{ replyId: 3, replyBody: 'YOLO!', postId: 5, userId: 2 }, {
        replyId: 4,
        replyBody: 'Just keep swimming, Just keep swimming', postId: 5, userId: 1
      }],
      addiction: '7',
    },
    {
      supportId: 3,
      supportName: 'Gambling for days',
      userList: ['Water', 'Pepsi', 'Jason'],
      postList: [],
      replyList: [],
      addiction: '5',
    },
    {
      supportId: 8,
      supportName: 'wallstreet addiction help zone',
      userList: ['Onions', 'Pork Chops', 'Jason'],
      postList: [],
      replyList: [],
      addiction: '7',
    },
    {
      supportId: 10,
      supportName: 'SPY 0 days recovery post',
      userList: ['Wizzdaddy', 'Bloombindale', 'Jason'],
      postList: [],
      replyList: [],
      addiction: '7',
    },
  ];

  constructor() { }

  myNewGroup(newGroup: SupportGroup): SupportGroup {
    this.mySupportGroup.push(newGroup);
    console.log('This is my new Support Group' + this.mySupportGroup);

    this.myarr.push(newGroup.supportName, newGroup.addiction);
    console.log(this.myarr);

    this.tempGroup = newGroup;

    console.log('This is my tempGroup');
    console.log(this.tempGroup);
    return this.tempGroup;


  }
}
