import { atom } from 'recoil';
import {
  ISignupFormDataProps,
  ISignupIdPwFormDataProps,
  ISignupTermsFormDataProps,
} from '../../utils/interface/Signup';
import { ISignUpRequest } from '../../models/users/request';

export const signUpFormData = atom<ISignUpRequest>({
  key: 'registerInfo',
  default: {
    account_id: '',
    password: '',
    user_type: 'STUDENT',
    name: '',
    birthday: '',
    school: 'GSM',
    sex: 'MALE',
    email: '',
  },
});

export const registerSchoolSelect = atom<string>({
  key: 'registerSchoolSelect',
  default: '광주소프트웨어마이스터고등학교',
});
