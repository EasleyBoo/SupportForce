import { Reply } from './reply';

export class Post {
    postId: number;
    postBody: string;
    replies?: Reply[];
}


