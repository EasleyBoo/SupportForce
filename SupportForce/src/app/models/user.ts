import { SupportGroup } from './supportgroup';
import { Post } from './post';
import { Reply } from './reply';
import { Addiction } from './addiction';

export class User {
    userId?: number;
    username: string;
    password: string;
    email: string;
    addictionList?: Addiction[];
    supportGroupList?: SupportGroup[];
    postList?: Post[];
    replyList?: Reply[];

  }
