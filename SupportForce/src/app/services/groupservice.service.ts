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
  tempGroup: SupportGroup = {
    supportName: '',
    addiction: null,
    userList: null
  };

  mySupportGroup: SupportGroup[] = [
    {
      supportId: 1,
      supportName: 'Sober for a week',
      userList: [
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
      ],
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
      supportName: 'Cocaine is not my master',
      userList: [
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
      ],
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
      supportName: 'Life is not worth gambling away',
      userList: [
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
      ],
      postList: [],
      replyList: [],
      addiction: '5',
    },
    {
      supportId: 8,
      supportName: 'wallstreet addiction help zone',
      userList: [
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
      ],
      postList: [],
      replyList: [],
      addiction: '7',
    },
    {
      supportId: 10,
      supportName: 'No more casinos for me',
      userList: [
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
      ],
      postList: [],
      replyList: [],
      addiction: '7',
    },
  ];



  allGroups: SupportGroup[] = [
    {
      supportId: 1,
      supportName: 'Sober for a week',
      userList: [
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
      ],
      addiction: 'Alcohol',
    },
    {
      supportId: 2,
      supportName: 'Cocaine is not my master',
      userList: [
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
      ],
      addiction: 'Cocaine',
    },
    {
      supportId: 3,
      supportName: 'Life is not worth gambling away',
      userList: [
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
      ],
      addiction: 'Gambling',
    },
    {
      supportId: 4,
      supportName: 'meth: never again',
      userList: [
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
      ],
      addiction: 'Meth',
    },
    {
      supportId: 5,
      supportName: 'I will never go back to oxy',
      userList: [
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
      ],
      addiction: 'Pain Killers',
    },
    {
      supportId: 6,
      supportName: 'life is better without cigarettes',
      userList: [
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
      ],
      addiction: 'Nicotine',
    },
    {
      supportId: 7,
      supportName: 'help me be free of heroin',
      userList: [
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
      ],
      addiction: 'Heroine',
    },
    {
      supportId: 8,
      supportName: 'wallstreetbets addiction help zone',
      userList: [
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
      ],
      addiction: 'Gambling',
    },
    {
      supportId: 9,
      supportName: 'Carrots against drinking',
      userList: [
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
      ],
      addiction: 'Alcohol',
    },
    {
      supportId: 10,
      supportName: 'SPY 0 days recovery post',
      userList: [
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
      ],
      addiction: 'Gambling',
    },

  ];


  constructor(private http: HttpClient) { }



  getMyGroups(): SupportGroup[] {
    return this.mySupportGroup;
  }

  getAllGroups(): Observable<SupportGroup> {
    return this.http.get<SupportGroup>(this.AllGroupUrl);

  }



  // getAllGroups(): SupportGroup[] {
  //   return this.allGroups;
  // }
  myNewGroup(newGroup: SupportGroup): SupportGroup {
    console.log(this.users);
    this.mySupportGroup.push(newGroup);
    console.log('This is my new Support Group' + this.mySupportGroup);

    this.tempGroup = newGroup;

    console.log('This is my tempGroup');
    console.log(this.tempGroup);
    return this.tempGroup;
  }

  updateMyGroup(joinGroup): void {
    this.mySupportGroup.push(joinGroup);

  }



}
