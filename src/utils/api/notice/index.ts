import instance from '../../axios';
import {
  INoticeDetailsResponse,
  INoticeListResponse,
  INoticeResponse,
} from '../../../models/notice/response';
import { IPatchNoticeRequest } from '../../../models/notice/request';

export const writeNotice = async (body: IPatchNoticeRequest) => {
  try {
    await instance.post('/notices', body);
  } catch (err) {
    throw err;
  }
};

export const getNoticeList = async (): Promise<INoticeListResponse> => {
  try {
    return await instance.get('/notices/lists');
  } catch (err) {
    throw err;
  }
};

export const getNoticeDetails = async (id: number): Promise<INoticeDetailsResponse> => {
  try {
    return await instance.get(`/notices/${id}`);
  } catch (err) {
    throw err;
  }
};

export const patchNotice = async (notice_id: number, body: IPatchNoticeRequest) => {
  try {
    await instance.patch(`/notices/${notice_id}`, body);
  } catch (err) {
    throw err;
  }
};

export const deleteNotice = async (notice_id: number) => {
  try {
    return await instance.delete(`/notices/${notice_id}`);
  } catch (err) {
    throw err;
  }
};
