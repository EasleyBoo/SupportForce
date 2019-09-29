import { Injectable } from '@angular/core';
import { SupportGroup } from '../models/supportgroup';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ForumserviceService {

  postUrl = 'http://localhost:8080/SupportForceBE/supportforce/createPost';

constructor(private http: HttpClient) { }

// getPost(id): Post[] {
//   console.log('This is my support group id in my service ' + id);
//   return this.posts;
//   // this will issue a http request by passing specific group id to get posts
// }

// getReply(): Reply[] {
//   return this.replies;
//   // this will issue a http request by passing specific post if to get replies
// }

newPost(newGroup, id, tempId): Observable<Post> {
  console.log('this is within the post');
  return this.http.post<Post>(this.postUrl + id + '/' + tempId, newGroup);

}


}
