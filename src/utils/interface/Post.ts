import { TFeed } from '../../models/common';

export interface IPostListDataProps {
  total_page: number;
  feed_list: IPostFeedListProps[];
}

export interface IPostFeedListProps {
  id: number;
  title: string;
  type: TFeed;
  created_at: string;
  author_name: string;
  is_like: boolean;
  view_count: number;
  like_count: number;
  comment_count: number;
}

export interface IPostReplyDataProps {
  id: number;
  title: string;
  writer: string;
  school: string;
  prifileImg: string;
  studentState: string;
  createDate: string;
  lastModifyDate: string;
  text: string;
  picture: any[];
  likes: number;
  views: string;
  comment: ICommnet[];
}

export interface ICommnet {
  id: number;
  name: string;
  studentState: string;
  profileImg: string;
  school: string;
  createDate: string;
  text: string;
  picture: any[];
  commentOfComment?: ICommnet[];
}

export interface IMakeComment {
  text: string;
  picture: IMakeCommentPicture[];
}

export interface IMakeCommentPicture {
  id: number;
  name: string;
}

export interface IFeedProps {
  id: number;
  title: string;
  type: string;
  created_at: string;
  author_name: string;
  is_like: boolean;
  view_count: number;
  like_count: number;
  comment_count: number;
}

export interface IGetIPopularFeedListProps {
  feed_list: IFeedProps[];
}
