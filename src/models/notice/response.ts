export interface INoticeListResponse {
  notice_list: Array<{
    id: number;
    title: string;
    created_at: Date;
    is_pinned: boolean;
  }>;
}
export interface INoticeDetailsResponse {
  title: string;
  content: string;
  created_at: Date;
  is_updated: boolean;
  attachment_file_urls: string[] | string;
}
