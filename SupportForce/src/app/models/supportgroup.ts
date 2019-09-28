import { Post } from './post';
import { Reply } from './reply';
import { User } from './user';
import { Addiction } from './addiction';


export class SupportGroup {
    supportGroupId?: number;
    supportGroupName: string;
    addict?: Addiction;
    // supportGroupUsers?:
    // userList?: User[];
    // postList?: Post[];
    // replyList?: Reply[];
    // addiction: string;
}

