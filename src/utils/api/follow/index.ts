import instance from '../../axios';
import {
  IGetFollowerListResponse,
  IGetFollowingListResponse,
} from '../../../models/follow/response';

export const deleteFollower = async (user_id: number) => {
  try {
    await instance.delete(`/${user_id}/follow`);
  } catch (err) {
    throw err;
  }
};

export const getFollowerList = async (user_id: number): Promise<IGetFollowerListResponse> => {
  try {
    return await instance.get(`/follower/${user_id}`);
  } catch (err) {
    throw err;
  }
};

export const getFollowingList = async (user_id: number): Promise<IGetFollowingListResponse> => {
  try {
    return await instance.get(`/following/${user_id}`);
  } catch (err) {
    throw err;
  }
};

export const following = async (user_id: number) => {
  try {
    await instance.post(`/follow/${user_id}`);
  } catch (err) {
    throw err;
  }
};

export const deleteFollowing = async (user_id: number) => {
  try {
    await instance.delete(`/follow/${user_id}`);
  } catch (err) {
    throw err;
  }
};
