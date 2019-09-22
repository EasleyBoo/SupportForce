import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { POST } from 'src/app/models/mock-post';
import { REPLY } from 'src/app/models/mock-reply';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts = POST;
  replies = REPLY;
  forumReplies = this.getReplies();

  constructor() {
    // this.getReplies();
  }

  ngOnInit() {
  }


  getReplies(): string[] {
    let myReply: Reply;
    const emptyArr: string[] = [];

    this.posts.forEach(post => {
      const postId = post.postId;
      this.replies.forEach(reply => {
        if (reply.postId === postId) {
          myReply = reply;
          emptyArr.push(myReply.replyBody);
        }
      });
    });
    return emptyArr;
  }

 /*  getReplies(): Reply {
    let myReply: Reply;
    this.posts.forEach(post => {
      const postId = post.postId;
      this.replies.forEach(reply => {

        if (reply.postId === postId) {
          console.log('hey this id is a match!');
          console.log(reply);
          return myReply = reply;
        }

      });
    });

    console.log('this is myReply...');
    console.log(myReply);
    return myReply;
  } */

}
