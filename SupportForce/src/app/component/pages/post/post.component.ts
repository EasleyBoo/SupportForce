import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { ActivatedRoute } from '@angular/router';
import { ForumserviceService } from 'src/app/services/forumservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  allReplies: Reply[];
  postById: Post[] = [];

  constructor(private route: ActivatedRoute, private forumServ: ForumserviceService) { }

  ngOnInit() {
    this.postById = this.getOnePost();
    this.allReplies = this.readAllReplies();

  }

  getOnePost(): Post[] {
    const id = this.route.snapshot.paramMap.get('id');
    this.forumServ.readOnePost(id).subscribe(data => {
      this.postById = data;
    });
    return this.postById;
  }

  createReply(newReply: NgForm): Reply[] {
    let userId;
    const id = this.route.snapshot.paramMap.get('id');
    const supportGroupId = this.route.snapshot.paramMap.get('idgp');
    userId = localStorage.getItem('userId');
    this.forumServ.createReply(id, supportGroupId, userId, newReply.value).subscribe(data => {
      this.allReplies = data;
    });
    return this.allReplies;
  }

  readAllReplies(): Reply[] {
    const id = this.route.snapshot.paramMap.get('id');
    this.forumServ.readAllRepliesServ(id).subscribe(data => {
      this.allReplies = data;
    });
    return this.allReplies;
  }

}
