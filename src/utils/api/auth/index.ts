import instance from '../../axios';
import {
  IChangePasswordRequest,
  ICheckEmailAuthCodeRequest,
  ICheckIdOverWrapRequest,
  ILoginRequest,
  IPostAuthCodeRequest,
  TFindId,
} from '../../../models/auth/request';
import {
  IFindIdResponse,
  ILoginResponse,
  IPostAuthcodeResponse,
} from '../../../models/auth/response';

export const postEmailAuthCode = async (
  certificationData: IPostAuthCodeRequest,
): Promise<IPostAuthcodeResponse> => {
  try {
    return await instance.post('/auth/email-verifications', certificationData);
  } catch (error) {
    throw error;
  }
};

export const checkEmailAuthCode = async (
  checkCertificationData: ICheckEmailAuthCodeRequest,
): Promise<void> => {
  try {
    await instance.head<void>('/auth/email-verifications', {
      data: checkCertificationData,
    });
  } catch (error) {
    throw error;
  }
};

export const login = async ({
  account_id,
  password,
  app_device_token = null,
  web_device_token,
}: ILoginRequest): Promise<ILoginResponse> => {
  try {
    return await instance.post('/auth/tokens', {
      account_id,
      password,
      app_device_token,
      web_device_token,
    });
  } catch (error) {
    throw error;
  }
};

export const changePassword = async ({
  email,
  new_password,
  account_id,
}: IChangePasswordRequest) => {
  try {
    await instance.patch('/auth/passwords', { email, new_password, account_id });
  } catch (err) {
    throw err;
  }
};

export const findId = async (user_email: TFindId): Promise<IFindIdResponse> => {
  try {
    return await instance.get(`/auth/${user_email}`);
  } catch (err) {
    throw err;
  }
};

export const checkIdOverWrap = async (account_id: ICheckIdOverWrapRequest) => {
  try {
    await instance.head('/auth/id-validations', { data: account_id });
  } catch (err) {
    throw err;
  }
};
