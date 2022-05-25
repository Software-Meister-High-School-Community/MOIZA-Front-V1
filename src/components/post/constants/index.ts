import {
  OptionArrType,
  PathType,
  SeeMoreOptionInterface,
} from '../../../utils/interface/common';

interface TypeArrType {
  id: string;
  summary: string;
}
export const typeArr: TypeArrType[] = [
  {
    id: 'all',
    summary: '전체',
  },
  {
    id: 'question',
    summary: '질문',
  },
  {
    id: 'nomal',
    summary: '일반',
  },
];

export const radioTypeArr: TypeArrType[] = [
  {
    id: 'question',
    summary: '질문',
  },
  {
    id: 'nomal',
    summary: '일반',
  },
];

export const postListPathArr: PathType[] = [
  {
    path: '카테고리',
    link: '/category',
  },
  {
    path: 'Design',
    link: '/list/Design',
  },
];

export const postListReplyPathArr: PathType[] = [
  {
    path: '카테고리',
    link: '/category',
  },
  {
    path: 'Design',
    link: '/list/Design',
  },
  {
    path: '질문 게시물',
    link: '/list/reply/:postid',
  },
];

export const postWritePathArr: PathType[] = [
  {
    path: '카테고리',
    link: '/category',
  },
  {
    path: 'Design',
    link: '/list/Design',
  },
  {
    path: '게시물작성',
    link: "'/postwrite/Design",
  },
];

export const seeMoreOption: SeeMoreOptionInterface[] = [
  {
    option: '수정',
    onClickFunction: () => console.log('asd'),
  },
  {
    option: '삭제',
    onClickFunction: () => {},
  },
];

export const writeSeeMoreOption: SeeMoreOptionInterface[] = [
  {
    option: '상단 고정',
    onClickFunction: () => console.log('asd'),
  },
  {
    option: '신고',
    onClickFunction: () => {},
  },
];

export const userSeeMoreOption: SeeMoreOptionInterface[] = [
  {
    option: '신고',
    onClickFunction: () => {},
  },
];
