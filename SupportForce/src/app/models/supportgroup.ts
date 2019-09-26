import { Post } from './post';
import { Reply } from './reply';
import { User } from './user';

export class SupportGroup {
    supportId?: number;
    supportName: string;
    userList?: User[];
    postList?: Post[];
    replyList?: Reply[];
    addiction: string;
}
