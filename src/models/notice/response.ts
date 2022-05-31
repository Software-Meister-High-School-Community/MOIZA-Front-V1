export interface INoticeResponse {
  id: number;
  title: string;
  created_at: string;
  is_pinned: boolean;
}
export interface INoticeListResponse {
  total_count: number;
  notice_list: INoticeResponse[];
}
export interface INoticeDetailsResponse {
  title: string;
  content: string;
  created_at: string;
  is_updated: boolean;
  attachment_file_urls: string[] | string;
}
