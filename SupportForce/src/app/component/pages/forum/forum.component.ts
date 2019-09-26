import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { NgForm } from '@angular/forms';
import { ForumserviceService } from 'src/app/services/forumservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forumReplies: Reply[];
  forumPosts: Post[];

  constructor(private forumServ: ForumserviceService) {

    this.forumPosts = this.forumServ.getPost();
    this.forumReplies = this.forumServ.getReply();

  }

  ngOnInit() {
  }

 insertComment(comment: NgForm): void {
    console.log(comment.value);
    comment.reset();

 }


}


//USING MOCK DATA TO GET REPLIES AND POSTS

// getSupportId(): number {
// return 1;
// }

// getPosts(): number {
//   let num = this.getSupportId();
//   return 1;
// }


// getReplies(): Reply {

//   return null;
// }

// getReplies(): string[] {
//   let myReply: Reply;
//   let emptyArr: string[] = [];
//   this.posts.forEach(post => {
//     const postId = post.postId;
//     this.replies.forEach(reply => {
//       if (reply.postId === postId) {
//         myReply = reply;
//         emptyArr.push(myReply.replyBody);
//       }
//     });
//   });
//   return emptyArr;
// }
// }


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
