import { TBackGroundColor, TSchool, TUser } from '../common';

export interface IGetUserSearchHistory {
  keywords: Array<{
    history_id: number;
    keyword: string;
  }>;
}

export interface IUserSearchResponse {
  user_list: Array<{
    user_id: number;
    name: string;
    profile_image_url: string;
    user_scope: TUser;
    school: TSchool;
  }>;
}

export interface IGetUserProfileResponse {
  name: string;
  school: TSchool;
  user_scope: TUser;
  profile_image_url: string;
  profile_background_color: TBackGroundColor;
  introduce: string | null;
  link_url: string[] | null;
  feed_count: number;
  follower_count: number;
  following_count: number;
}

export interface IGetMyPageResponse extends IGetUserProfileResponse {
  id: number | null;
}
