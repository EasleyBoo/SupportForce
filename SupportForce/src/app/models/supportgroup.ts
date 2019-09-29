import { Post } from './post';
import { Reply } from './reply';
import { User } from './user';
import { Addiction } from './addiction';



export class SupportGroup {
    supportGroupId?: number;
    supportGroupName: string;
    supportGroupUsers?: User[];
    addict?: Addiction;
    postList?: Post[];
    replyList?: Reply[];
}

