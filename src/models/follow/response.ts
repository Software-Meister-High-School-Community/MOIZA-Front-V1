import { TSchool, TUser } from '../common';

export interface IGetFollowingListResponse {
  follower_user_list: Array<{
    user_id: number;
    name: string;
    profile_image_url: string;
    user_scope: TUser;
    school: TSchool;
    is_follow: boolean;
  }>;
}

export interface IGetFollowerListResponse extends IGetFollowingListResponse {}
