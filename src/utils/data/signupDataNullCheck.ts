import {
  ISignupFormDataProps,
  ISignupIdPwFormDataProps,
  ISignupTermsFormDataProps,
} from '../interface/Signup';
import { ISignUpRequest } from '../../models/users/request';

export const signupFormDataNullcheck = (data: ISignUpRequest): boolean => {
  // if (data?.certificationNumber === '') return true;

  return data.name === '' || data.email === '' || data.birthday === '';
};

export const signupIdPwFormDataNullCheck = (data: ISignupIdPwFormDataProps): boolean => {
  return data.password === '' || data.checkPassword === '' || data.account_id === '';
};
