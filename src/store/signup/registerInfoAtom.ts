import { atom } from 'recoil';
import {
  ISignupFormDataProps,
  ISignupIdPwFormDataProps,
  ISignupTermsFormDataProps,
} from '../../utils/interface/Signup';

export const signUpFormData = atom<ISignupFormDataProps>({
  key: 'registerInfo',
  default: {
    studentStatus: '',
    name: '',
    birth: '',
    schoolSelect: '광주소프트웨어마이스터고등학교',
    sex: '',
    email: '',
    certificationNumber: '',
  },
});

export const signUpTermsFormData = atom<ISignupTermsFormDataProps>({
  key: 'SignupTermsFormData',
  default: {},
});

export const signUpIdPwFormData = atom<ISignupIdPwFormDataProps>({
  key: 'SignupIdPwFormDatta',
  default: {
    id: '',
    pw: '',
    checkPw: '',
  },
});

export const registerSchoolSelect = atom<string>({
  key: 'registerSchoolSelect',
  default: '광주소프트웨어마이스터고등학교',
});
