import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { NgForm } from '@angular/forms';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {

  private routeSub: Subscription;

  forumReplies: Reply[];
  forumPosts: Post[];
  allPosts: Post[];

  constructor(private forumServ: ForumserviceService, private route: ActivatedRoute) {

  }



  ngOnInit() {
    this.allPosts = this.readPost();

  }


  // getPost() {
  //   //this method should grab the support id to pass into the service
  //   console.log(this.route.snapshot.paramMap.get('id'));
  //   let id = this.route.snapshot.paramMap.get('id');
  //   this.forumServ.getPost(id);
  // }

  insertComment(comment: NgForm) {
    console.log(comment.value);
    let tempId;
    tempId = localStorage.getItem('userId');

    const id = this.route.snapshot.paramMap.get('id');
    console.log('This is on the ngOnIt ID');
    console.log(id);
    this.forumServ.newPost(comment.value, id, tempId).subscribe(data => {
      console.log(data);
      this.allPosts.push(data);
    });
    comment.reset();

  }

  readPost(): Post[] {
    const id = this.route.snapshot.paramMap.get('id');
    this.forumServ.readPostServ(id).subscribe(data => {
      console.log(data);
      this.allPosts = data;
    });
    return this.allPosts;
  }



}


