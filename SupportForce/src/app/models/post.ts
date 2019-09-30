import { Reply } from './reply';

export class Post {
    postId?: number;
    postBody: string;
    replyList?: Reply[];
    userId: number;
}


