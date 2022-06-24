import { atom } from 'recoil';

export const SearchKeywordState = atom<string>({
  key: 'searchKeyword',
  default: '',
});
