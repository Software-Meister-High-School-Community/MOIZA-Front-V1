import { TCategory, TFeed, TSort } from '../../utils/interface/common';

export interface IModifyTemporariesFeedRequest {
  title: string;
  content?: string;
}

export interface ISaveTemporariesFeedRequest {
  title: string;
  content?: string;
}

export interface ISuggestionFeedListRequest {
  category: TCategory;
}

export interface ITemporariesFeedRequest {
  category: TCategory;
  type: TFeed;
}

export interface IMyFeedListRequest {
  category: TCategory;
  type: TFeed;
  order: TSort;
  page: number;
}

export interface ISearchFeedRequest {
  name: string;
  category: TCategory;
  type: TFeed;
  order: TSort;
  page: number;
}

export interface IFeedListRequest {
  category: TCategory;
  type: TFeed;
  order: TSort;
  page: number;
}

export interface IPostFeedRequest {
  title: string;
  content?: string;
  feed_type: TFeed;
  category: TCategory;
  image_urls: string[];
}
