import {
  IPatchFeedRequest,
  IPatchTemporariesFeedRequest,
  IPostFeedRequest,
  ISaveTemporariesFeedRequest,
} from '../../../models/feeds/request';
import {
  IGetFeedDetailResponse,
  IGetFeedListResponse,
  IGetIPopularFeedListResponse,
  IGetMyFeedListResponse,
  IGetSearchFeedResponse,
  IGetSuggestionFeedListResponse,
  IGetTemporariesDetailResponse,
  IGetTemporariesFeedListResponse,
} from '../../../models/feeds/response';
import instance from '../../axios';
import { TCategory, TFeed, TSort } from '../../../models/common';

export const patchTemporaries = async (feed_id: number, body: IPatchTemporariesFeedRequest) => {
  try {
    await instance.patch(`/feeds/temporaries/${feed_id}`, body);
  } catch (err) {
    throw err;
  }
};

export const deleteTemporaries = async (feed_id: number) => {
  try {
    await instance.delete(`/feeds/temporaries/${feed_id}`);
  } catch (err) {
    throw err;
  }
};

export const saveTemporaries = async (body: ISaveTemporariesFeedRequest) => {
  try {
    await instance.post('/feeds/temporaries', body);
  } catch (err) {
    throw err;
  }
};

export const getSuggestionFeeds = async (
  category: TCategory,
): Promise<IGetSuggestionFeedListResponse> => {
  try {
    return await instance.get(`/feeds/lists/suggestions?category=${category}`);
  } catch (err) {
    throw err;
  }
};

export const getPopularFeeds = async (): Promise<IGetIPopularFeedListResponse> => {
  try {
    return await instance.get('/feeds/lists/populars');
  } catch (err) {
    throw err;
  }
};

export const getTemporariesFeedList = async (
  category: TCategory,
  type: TFeed,
): Promise<IGetTemporariesFeedListResponse> => {
  try {
    return await instance.get(`/feeds/lists/temporaries?category=${category}&type=${type}`);
  } catch (err) {
    throw err;
  }
};

export const getMyFeedList = async (
  category: TCategory,
  type: TFeed,
  order: TSort,
  page: number,
): Promise<IGetMyFeedListResponse> => {
  try {
    return await instance.get(
      `/feeds/lists?category=${category}&type=${type}&oreder=${order}&page=${page}`,
    );
  } catch (err) {
    throw err;
  }
};

export const searchFeed = async (
  name: string,
  category: TCategory,
  type: TFeed,
  order: TSort,
  page: number,
): Promise<IGetSearchFeedResponse> => {
  try {
    return await instance.get(
      `/feeds/searching?name=${name}&category=${category}&type=${type}&oreder=${order}&page=${page}`,
    );
  } catch (err) {
    throw err;
  }
};

export const getFeedList = async (
  user_id: number,
  category: TCategory,
  type: TFeed,
  order: TSort,
  page: number,
): Promise<IGetFeedListResponse> => {
  try {
    return await instance.get(
      `/feeds/lists/${user_id}?category=${category}&type=${type}&oreder=${order}&page=${page}`,
    );
  } catch (err) {
    throw err;
  }
};

export const Like = async (feed_id: number) => {
  try {
    await instance.post(`/feeds/${feed_id}/like`);
  } catch (err) {
    throw err;
  }
};

export const DeleteLike = async (feed_id: number) => {
  try {
    await instance.delete(`/feeds/${feed_id}/like`);
  } catch (err) {
    throw err;
  }
};

export const reportFeed = async (feed_id: number) => {
  try {
    await instance.post(`/feeds/${feed_id}/reports`);
  } catch (err) {
    throw err;
  }
};

export const deleteFeed = async (feedId: number) => {
  try {
    return await instance.post(`/feeds/${feedId}`);
  } catch (err) {
    throw err;
  }
};

export const patchFeed = async (feed_id: number, body: IPatchFeedRequest) => {
  try {
    await instance.patch(`/feeds/${feed_id}`, body);
  } catch (err) {
    throw err;
  }
};

export const getFeedDetail = async (feed_id: number): Promise<IGetFeedDetailResponse> => {
  try {
    return await instance.get(`/feeds/${feed_id}`);
  } catch (err) {
    throw err;
  }
};

export const postFeed = async (body: IPostFeedRequest) => {
  await instance.post('/feeds', body);
  try {
  } catch (err) {
    throw err;
  }
};

export const getTemproryDetail = async (
  feed_id: number,
): Promise<IGetTemporariesDetailResponse> => {
  try {
    return await instance.get(`/temporaries/${feed_id}`);
  } catch (err) {
    throw err;
  }
};
