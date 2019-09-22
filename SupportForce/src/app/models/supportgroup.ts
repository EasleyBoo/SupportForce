import { Post } from './post';
import { Reply } from './reply';

export class SupportGroup {
    supportId: number;
    supportName: string;
    userList: string[];
    postList?: Post[];
    replyList?: Reply[];
    addiction: string;
}
