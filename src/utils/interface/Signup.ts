export interface ISignupFormDataProps {
  studentStatus: string;
  name: string;
  birth: string;
  sex: string;
  schoolSelect: string;
  email: string;
  certificationNumber: string;
}

export interface ISignupTermsFormDataProps {}

export interface ISignupIdPwFormDataProps {
  account_id: string;
  password: string;
  checkPassword: string;
}
