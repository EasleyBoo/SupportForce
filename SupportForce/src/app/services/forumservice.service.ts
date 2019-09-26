import { Injectable } from '@angular/core';
import { SupportGroup } from '../models/supportgroup';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';



@Injectable({
  providedIn: 'root'
})
export class ForumserviceService {

  posts: Post [] = [
    {
     postId: 1,
     postBody: 'my post - Im so sad because of this....',
     userId: 1,
    },
    {
    postId: 5,
    postBody: 'Alcohol is my gateway to freedom...',
    userId: 2,
    },
    {
    postId: 4,
    postBody: 'Cocaine is not good',
    userId: 1,
    }
];


replies: Reply[] = [
  {
      replyId: 1,
      replyBody: 'reply: This is my reply to sadness :(',
      postId: 1,
      userId: 1
  },
  {
      replyId: 2,
      replyBody: 'reply:  Keep on drinking!',
      postId: 1,
      userId: 1

  },
  {
      replyId: 3,
      replyBody: 'YOLO!',
      postId: 5,
      userId: 1
  },
  {
      replyId: 4,
      replyBody: 'Just keep swimming, Just keep swimming',
      postId: 5,
      userId: 2
  }
];






constructor() { }

}
