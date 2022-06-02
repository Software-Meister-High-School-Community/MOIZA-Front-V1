import { TCategory, TSort } from '../../../../models/common';

interface IDepartmentOption {
  option: string;
  value: TCategory;
}

export const departmentOptions: IDepartmentOption[] = [
  { option: '모든 분야', value: 'ALL' },
  { option: 'Front-End', value: 'FRONT-END' },
  { option: 'Back-End', value: 'BACK-END' },
  { option: 'IOS', value: 'IOS' },
  { option: 'Android', value: 'AOS' },
  { option: 'Design', value: 'DESIGN' },
  { option: 'Game', value: 'GAME' },
  { option: 'Security', value: 'SECURITY' },
  { option: 'Embedded', value: 'EMBEDDED' },
  { option: 'AI', value: 'AI' },
];

interface ISortOption {
  option: string;
  value: TSort;
}

export const sortOptions: ISortOption[] = [
  { option: '최신 순', value: 'LATEST' },
  { option: '오래된 순', value: 'OLDEST' },
  { option: '조회수 순', value: 'VIEW_COUNT' },
  { option: '좋아요 순', value: 'LIKE_COUNT' },
];
