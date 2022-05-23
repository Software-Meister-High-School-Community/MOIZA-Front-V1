export interface IPatchNoticeRequest {
  title: string;
  content: string;
  is_pinned: boolean;
  attachment_file_urls: string[] | null;
}
