import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private forumServ: ForumserviceService, private route: ActivatedRoute) {

  }

  ngOnInit() {
   // this.getPost();
  // this.forumReplies = this.forumServ.getReply();
  }


  // getPost() {
  //   //this method should grab the support id to pass into the service
  //   console.log(this.route.snapshot.paramMap.get('id'));
  //   let id = this.route.snapshot.paramMap.get('id');
  //   this.forumServ.getPost(id);
  // }


  // insertComment(comment: NgForm): void {
  //   console.log(comment.value);
  //   let tempId;
  //   tempId = localStorage.getItem('userId');

  //   this.forumServ.newPost(comment.value, tempId).subscribe(data => {
  //     console.log(data);
  //   });
  //   comment.reset();

  // }


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
