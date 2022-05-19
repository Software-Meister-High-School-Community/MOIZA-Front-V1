export interface IPostCommentReplyRequest {
  content: string;
  attachment_file_urls: string[] | null;
  comment_id: number;
}

export interface IWriteCommentRequest {
  content: string;
  attachment_file_urls: string[] | null;
}

export interface IPatchCommentRequest {
  content: string;
  attachment_file_urls: string[] | null;
  comment_id: number;
}
