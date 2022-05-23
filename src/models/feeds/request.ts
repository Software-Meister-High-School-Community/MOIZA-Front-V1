import { TCategory, TFeed, TSort } from '../common';

export interface IPatchTemporariesFeedRequest {
  title: string;
  content?: string;
}

export interface ISaveTemporariesFeedRequest extends IPatchTemporariesFeedRequest {}

export interface ITemporariesFeedRequest {
  category: TCategory;
  type: TFeed;
}

export interface IMyFeedListRequest extends ITemporariesFeedRequest {
  order: TSort;
  page: number;
}

export interface ISearchFeedRequest extends IMyFeedListRequest {
  name: string;
}

export interface IFeedListRequest extends IMyFeedListRequest {}

export interface IPostFeedRequest extends IPatchFeedRequest {
  category: TCategory;
}

export interface IPatchFeedRequest extends IPatchTemporariesFeedRequest {
  feed_type: TFeed;
  images_urls: string[] | null;
}
