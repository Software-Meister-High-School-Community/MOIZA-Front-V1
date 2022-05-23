import { TBackGroundColor, TSchool, TSex, TUser } from '../common';

export interface ISignUpRequest {
  account_id: string;
  password: string;
  email: string;
  name: string;
  birthday: string;
  sex: TSex;
  user_type: TUser;
  school: TSchool;
}

export interface ISearchUserRequest {
  name: string;
  page: number;
}
export interface IVerifyGraduateRequest {
  verifying_file_url: string;
}

export interface IPatchUserRequest {
  profile_image_url: string;
  profile_background_color: TBackGroundColor;
  introduce: string;
  introduce_link_url: string[];
}
