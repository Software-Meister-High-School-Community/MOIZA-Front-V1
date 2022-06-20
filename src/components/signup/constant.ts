import { TSchool, TSex, TUser } from '../../models/common';

interface ISchoolList {
  id: TSchool;
  summary: string;
}

export const schoolList: ISchoolList[] = [
  { id: 'GSM', summary: '광주소프트웨어마이스터고등학교' },
  { id: 'DGSW', summary: '대구소프트웨어마이스터고등학교' },
  { id: 'DSM', summary: '대덕소프트웨어마이스터고등학교' },
  { id: 'NCMM', summary: '미림마이스터고등학교' },
  { id: 'BSSM', summary: '부산소프트웨어마이스터고등학교' },
];

interface ISexListProps {
  id: TSex;
  summary: string;
}

export const sexList: ISexListProps[] = [
  {
    id: 'MALE',
    summary: '남성',
  },
  {
    id: 'FEMALE',
    summary: '여성',
  },
];

interface IUSerTypeList {
  id: TUser;
  summary: string;
}

export const studentStatusList: IUSerTypeList[] = [
  { id: 'STUDENT', summary: '재학생' },
  { id: 'GRADUATE', summary: '졸업생' },
];

export const signupPartList: string[] = ['약관동의', '정보입력', '아이디 / 비밀번호'];
