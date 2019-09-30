import { Injectable } from '@angular/core';
import { SupportGroup } from '../models/supportgroup';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ForumserviceService {
  BACKEND_URL = environment.BACKEND_URL;
  postUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/createPost`;
  readPostUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/getAllPost`;
  onePostUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/getSpecificPost`;
  createReplyUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/createReply`;
  readReplyUrl = `http://${this.BACKEND_URL}/SupportForceBE/supportforce/getAllReply`;

constructor(private http: HttpClient) { }

newPost(newGroup, id, tempId): Observable<Post> {
  console.log('this is within the post');
  return this.http.post<Post>(this.postUrl + id + '/' + tempId, newGroup);

}

readPostServ(id): Observable<Post[]> {
  console.log('this is within read all post serve');
  console.log(id);
  return this.http.get<Post[]>(this.readPostUrl + id);
}

readOnePost(id): Observable<Post[]> {
  console.log('this is within read one Post');
  return this.http.get<Post[]>(this.onePostUrl + id);
}

createReply(id, supportGroupId, userId, newReply) {
  console.log('this is within reply in forumService');
  return this.http.post<Reply>(this.createReplyUrl + id + '/' + supportGroupId + '/' + userId, newReply);

}

readAllRepliesServ(id): Observable<Reply[]> {
  console.log('this is within Reply in forumService');
  return this.http.get<Reply[]>(this.readReplyUrl + id);
}


}
