import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { NgForm } from '@angular/forms';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

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

  constructor(private forumServ: ForumserviceService, private route: ActivatedRoute, private location: Location) {

  }



  ngOnInit() {
    this.allPosts = this.readPost();

  }


  insertComment(comment: NgForm) {
    let tempId;
    tempId = localStorage.getItem('userId');

    const id = this.route.snapshot.paramMap.get('id');
    this.forumServ.newPost(comment.value, id, tempId).subscribe(data => {
      this.allPosts.push(data);
    });
    comment.reset();

  }

  readPost(): Post[] {
    const id = this.route.snapshot.paramMap.get('id');
    this.forumServ.readPostServ(id).subscribe(data => {
      this.allPosts = data;
      console.log(data);
    });
    return this.allPosts;
  }

  goBack(): void {
    this.location.back();
  }

}
