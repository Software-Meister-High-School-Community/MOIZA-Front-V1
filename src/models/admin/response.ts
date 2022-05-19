import { TFeed, TSchool, TUser } from '../../utils/interface/common';

export interface IGraduateListResponse {
  total_count: number;
  user_list: Array<{
    user_id: number;
    name: string;
    school: TSchool;
    type: TUser;
    verifying_image_url: string;
  }>;
}
export interface ICommentReportResponse {
  total_count: number;
  comment_list: Array<{
    feed_id: number;
    author: {
      id: number;
      name: string;
      school: TSchool;
      type: TUser;
    };
    reported_count: number;
    content: string;
    created_at: Date;
  }>;
}
export interface IFeedReportResponse {
  total_count: number;
  post_list: Array<{
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
    created_at: Date;
  }>;
}
export interface IUserReportResponse {
  total_count: number;
  user_list: Array<{
    user_id: number;
    name: string;
    school: TSchool;
    type: TUser;
    suspension_created_at: Date;
    suspension_expired_at: Date;
    user_reported_count: number;
    feed_reported_count: number;
    comment_reported_count: number;
  }>;
}

export interface IUserSuspenseResponse {
  expired_at: Date;
}
