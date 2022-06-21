import { PathType, SeeMoreOptionInterface } from '../../utils/interface/common';
import { TReport } from './manageReport';
import { INoticeListResponse } from '../../models/notice/response';

export type TManageMent = 'report' | 'notice' | 'graduate';

export const REPORT: TManageMent = 'report';
export const NOTICE: TManageMent = 'notice';
export const GRADUATE: TManageMent = 'graduate';

interface RadioTypeInterface {
  id: TReport;
  summary: string;
}
export const typeArr: RadioTypeInterface[] = [
  {
    id: 'USERS',
    summary: '사용자',
  },
  {
    id: 'FEEDS',
    summary: '게시물',
  },
  {
    id: 'COMMENTS',
    summary: '답변',
  },
];

interface InputStyleType {
  [key: string]: {
    width: string;
    placeholder: string;
  };
}

export const inputStyle: InputStyleType = {
  user: {
    width: '205',
    placeholder: '유저 이름 입력',
  },
  post: {
    width: '400',
    placeholder: '유저 이름 / 제목 입력',
  },
  comment: {
    width: '400',
    placeholder: '유저 이름 / 내용 입력',
  },
};

export const writeNoticePathArr: PathType[] = [
  {
    path: '어드민 페이지',
    link: '/admin',
  },
  {
    path: '공지사항',
    link: '/admin/notice',
  },
  {
    path: '공지사항 작성',
    link: '/write-notification',
  },
];
export const noticeListTestArray: INoticeListResponse = {
  total_count: 10,
  notice_list: [
    {
      is_pinned: true,
      title: '모이자에 오신 여러분 환영합니다!',
      id: 0,
      created_at: '2022-05-01`T`02:17:00',
    },
    {
      is_pinned: true,
      title: '모이자와 함께하기 위해서는',
      id: 1,
      created_at: '2022-05-01`T`02:17:00',
    },
    {
      is_pinned: false,
      title: '모이자에 오신 여러분 환영합니다!',
      id: 2,
      created_at: '2022-05-01`T`02:17:00',
    },
  ],
};

export const seeMoreOptionList: SeeMoreOptionInterface[] = [
  {
    option: '수정',
    onClickFunction: () => console.log('ASd'),
  },
  {
    option: '삭제',
    onClickFunction: () => console.log('ASd'),
  },
];
