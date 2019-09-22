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
    this.getReplies();
  }

  ngOnInit() {
  }

  getReplies(): Reply {
    this.posts.forEach(post => {
      const postId = post.postId;
      this.replies.forEach(reply => {
        if (reply.postId === postId) {
          console.log(reply);
          return reply;
        }
      });
    });
    return null;
  }

}
