import { TFeed, TSchool, TUser } from '../common';

export interface IGraduateResponse {
  user_id: number;
  name: string;
  school: TSchool;
  type: TUser;
  verifying_image_url: string;
}

export interface IGraduateListResponse {
  total_count: number;
  user_list: IGraduateResponse[];
}

export interface IReportedComment {
  feed_id: number;
  author: {
    id: number;
    name: string;
    school: TSchool;
    type: TUser;
  };
  reported_count: number;
  content: string;
  created_at: string;
}

export interface ICommentReportResponse {
  total_count: number;
  comment_list: IReportedComment[];
}

export interface IReportedFeed {
  id: number;
  author: {
    id: number;
    name: string;
    school: TSchool;
    type: TUser;
  };
  reported_count: number;
  title: string;
  type: TFeed;
  created_at: string;
}

export interface IFeedReportResponse {
  total_count: number;
  post_list: IReportedFeed[];
}

export interface IReportedUser {
  user_id: number;
  name: string;
  school: TSchool;
  type: TUser;
  suspension_created_at: string;
  suspension_expired_at: string;
  user_reported_count: number;
  feed_reported_count: number;
  comment_reported_count: number;
}

export interface IUserReportResponse {
  total_count: number;
  user_list: IReportedUser[];
}

export interface IUserSuspenseResponse {
  expired_at: string;
}
