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
  return this.http.post<Post>(this.postUrl + id + '/' + tempId, newGroup);

}

readPostServ(id): Observable<Post[]> {
  return this.http.get<Post[]>(this.readPostUrl + id);
}

readOnePost(id): Observable<Post[]> {
  return this.http.get<Post[]>(this.onePostUrl + id);
}

createReply(id, supportGroupId, userId, newReply) {
  return this.http.post<Reply>(this.createReplyUrl + id + '/' + supportGroupId + '/' + userId, newReply);

}

readAllRepliesServ(id): Observable<Reply[]> {
  return this.http.get<Reply[]>(this.readReplyUrl + id);
}


}
