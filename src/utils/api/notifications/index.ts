import instance from '../../axios';
import { TopicType } from '../../../models/notifications/request';
import { INotificationListResponse } from '../../../models/notifications/response';

export const getNotifications = async (): Promise<INotificationListResponse[]> => {
  try {
    return await instance.get('/notifications/lists');
  } catch (err) {
    throw err;
  }
};

export const setNotificationSubscribe = async (topic: TopicType) => {
  try {
    await instance.patch('/notifications/subscribing', {
      topic,
    });
  } catch (err) {
    throw err;
  }
};

export const setNotificationUnsubscribe = async (topic: TopicType) => {
  try {
    await instance.patch('/notifications/unsubscribing', {
      topic,
    });
  } catch (err) {
    throw err;
  }
};
