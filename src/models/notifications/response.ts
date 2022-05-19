import { TopicType } from './request';

export interface INotificationListResponse {
  notification_lists: Array<{
    id: number;
    title: string;
    content: string;
    type: TopicType;
    data: number;
    is_read: boolean;
    created_at: string | null;
  }>;
}
