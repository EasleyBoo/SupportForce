import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { POST } from 'src/app/models/mock-post';
import { REPLY } from 'src/app/models/mock-reply';
import { SUPPORTGROUPS } from 'src/app/models/mock-supportgroups';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  allgroups = SUPPORTGROUPS;
  posts = POST;
  replies = REPLY;
  forumReplies = this.getReplies();
  forumPost = this.getPosts();

  constructor() {
    this.getPosts();
    this.getReplies();
  }

  ngOnInit() {
  }

getSupportId(): number {
return 1;
}

getPosts(): number {
  let num = this.getSupportId();
  return 1;
}

getReplies(): string[] {
  let myReply: Reply;
  let emptyArr: string[] = [];
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
}


//   getReplies(): string[] {
//     let myReply: Reply;
//     let emptyArr: string[] = [];
//     this.posts.forEach(post => {
//       const postId = post.postId;
//       this.replies.forEach(reply => {
//         if (reply.postId === postId) {
//           myReply = reply;
//           emptyArr.push(myReply.replyBody);
//         }
//       });
//     });
//     return emptyArr;
//   }
// }
