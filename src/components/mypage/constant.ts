import { OptionArrType, SeeMoreOptionInterface } from '../../utils/interface/common';

interface TypeArrType {
  id: string;
  summary: string;
}

export const mypageOptionArray: TypeArrType[] = [
  {
    id: 'question',
    summary: '질문',
  },
  {
    id: 'common',
    summary: '일반',
  },
];

export const seeMoreOptionList: SeeMoreOptionInterface[] = [
  {
    option: '신고',
    onClickFunction: () => console.log('ASd'),
  },
];
