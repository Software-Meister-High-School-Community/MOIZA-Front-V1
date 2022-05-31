import instance from '../../axios/index';
import {
  ICommentReportResponse,
  IFeedReportResponse,
  IGraduateListResponse,
  IUserReportResponse,
  IUserSuspenseResponse,
} from '../../../models/admin/response';
import { TGraduateStatus } from '../../../models/common';

export const getGraduateList = async (
  status: TGraduateStatus,
  keyword: string | null,
  page: number,
): Promise<IGraduateListResponse> => {
  try {
    return await instance.get(
      `/admins/graduate/lists?status=${status}&keyword=${keyword}&page=${page}`,
    );
  } catch (err) {
    throw err;
  }
};

export const approveGraduate = async (userId: number) => {
  try {
    await instance.post(`/graduate/${userId}/acceptances`);
  } catch (err) {
    throw err;
  }
};

export const rejectGraduate = async (userId: number) => {
  try {
    await instance.post(`/admins/graduate/${userId}/rejections`);
  } catch (err) {
    throw err;
  }
};

export const userDelete = async (userId: number) => {
  try {
    return await instance.post(`/admins/${userId}`);
  } catch (err) {
    throw err;
  }
};

export const userSuspension = async (userId: number): Promise<IUserSuspenseResponse> => {
  try {
    return await instance.post(`/admins/${userId}/suspensions`);
  } catch (err) {
    throw err;
  }
};

export const getCommentReports = async (
  page: number,
  keyword: string | null,
): Promise<ICommentReportResponse> => {
  try {
    return await instance.get(`/reports/comments?keyword=${keyword}&page=${page}`);
  } catch (err) {
    throw err;
  }
};

export const getFeedReports = async (
  page: number,
  keyword: string | null,
): Promise<IFeedReportResponse> => {
  try {
    return await instance.get(`/reports/feeds?keyword=${keyword}&page=${page}`);
  } catch (err) {
    throw err;
  }
};

export const getUserReports = async (
  page: number,
  keyword: string | null,
): Promise<IUserReportResponse> => {
  try {
    return await instance.get(`/reports/users?keyword=${keyword}&page=${page}`);
  } catch (err) {
    throw err;
  }
};
