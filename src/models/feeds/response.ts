import { TCategory, TFeed, TSchool, TUser } from '../../utils/interface/common';

interface AuthorInterface {
  author: {
    id: number;
    profile_image_url: string;
    name: string;
    school_name: TSchool;
    type: TUser;
  };
}

export interface IFeedResponse {
  id: number;
  title: string;
  type: TFeed;
  created_at: string;
  is_like: boolean;
  view_count: number;
  like_count: number;
  comment_count: number;
}

interface CommentInterface {
  id: number;
  author: AuthorInterface;
  is_mine: boolean;
  is_pinned: boolean;
  created_at: string;
  content: string;
  image_urls: string[];
  child_comments: Array<{
    id: number;
    parent_comment_id: number;
    author: AuthorInterface;
    is_mine: boolean;
    image_urls: string[];
    created_at: string;
    content: string;
  }>;
}

export interface ISuggestionFeedListResponse {
  feed_list: Array<{
    id: number;
    title: string;
    type: TFeed;
    created_at: string;
    author_name: string;
  }>;
}

export interface IPopularFeedListResponse {
  feed_list: IFeedResponse[];
}

export interface ITemporariesFeedListResponse {
  feed_list: Array<{
    id: number;
    title: string;
    created_at: string;
  }>;
}

export interface IMyFeedListResponse {
  total_page: number;
  feed_list: IFeedResponse[];
}

export interface ISearchFeedResponse {
  total_page: number;
  feed_list: IFeedResponse[];
}

export interface IFeedListResponse {
  total_page: number;
  feed_list: IFeedResponse[];
}

export interface IFeedDetailResponse {
  author: AuthorInterface;
  title: string;
  content: string;
  image_urls: string[];
  created_at: string;
  feed_type: TFeed;
  category: TCategory;
  is_mine: boolean;
  is_updated: boolean;
  like_count: number;
  view_count: number;
  comments: CommentInterface[];
}
