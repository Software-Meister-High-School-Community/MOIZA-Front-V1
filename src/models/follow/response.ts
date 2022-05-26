import { TSchool, TUser } from '../common';

export interface IFollow {
  user_id: number;
  name: string;
  profile_image_url: string;
  user_scope: TUser;
  school: TSchool;
  is_follow: boolean;
}

export interface IGetFollowingListResponse {
  following_user_list: IFollow[];
}

export interface IGetFollowerListResponse {
  follower_user_list: IFollow[];
}
