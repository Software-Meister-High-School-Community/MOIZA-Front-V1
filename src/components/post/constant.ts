import { PathType, SeeMoreOptionInterface } from '../../utils/interface/common';
import { TCategory } from '../../models/common';

interface ICategory {
  id: TCategory;
  summary: string;
}

export const categoryList: ICategory[] = [
  {
    id: 'ALL',
    summary: '종합',
  },
  {
    id: 'FRONT-END',
    summary: '프론트엔드',
  },
  {
    id: 'BACK-END',
    summary: '백엔드',
  },
  {
    id: 'IOS',
    summary: 'iOS',
  },
  {
    id: 'ANDROID',
    summary: '안드로이드',
  },
  {
    id: 'DESIGN',
    summary: '디자인',
  },
  {
    id: 'GAME',
    summary: '게임',
  },
  {
    id: 'AI',
    summary: '인공지능',
  },
  {
    id: 'EMBEDDED',
    summary: '임베디드',
  },
  {
    id: 'SECURITY',
    summary: '정보보안',
  },
];

export const categoryIdList = categoryList.map(item => {
  return item.id;
});

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
