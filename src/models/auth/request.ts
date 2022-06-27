import { TAuthorization } from '../../models/common';

export interface IChangePasswordRequest {
  new_password: string;
  account_id: string;
  email: string;
}

export type TFindId = string;

export interface ICheckEmailAuthCodeRequest {
  email: string;
  auth_code: string;
  type: TAuthorization;
}

export interface IPostAuthCodeRequest {
  type: TAuthorization;
  value: string;
}

export interface ILoginRequest {
  account_id: string;
  password: string;
  app_device_token: null;
  web_device_token: string;
}
