export interface NoticeProps {
  noticeState: boolean;
  noticeClose: any;
}

export interface INoticeListProps {
  totla_count: number;
  notice_list: INoticeDetailProps[];
}

export interface INoticeDetailProps {
  title: string;
  content: string;
  created_at: string;
  is_pinned: boolean;
}
