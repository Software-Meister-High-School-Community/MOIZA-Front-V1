import { TGraduateStatus } from '../../utils/interface/common';

export interface IGetGraduateListRequest {
  keyword: string | null;
  status: TGraduateStatus;
  page: number;
}

export interface IGetCommentReportsRequest {
  keyword: string;
  page: number;
}

export interface IGetFeedReportsRequest extends IGetCommentReportsRequest {}

export interface IGetUserReportsRequest extends IGetCommentReportsRequest {}
