import instance from '../../axios';
import {
  IChangePasswordRequest,
  ICheckEmailAuthCodeRequest,
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

export const login = async (body: ILoginRequest): Promise<ILoginResponse> => {
  try {
    return await instance.post('/auth/tokens', body);
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (body: IChangePasswordRequest) => {
  try {
    await instance.patch('/auth/passwords', body);
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

export const checkIdOverWrap = async (account_id: string) => {
  try {
    await instance.head('/auth/id-validations', { data: account_id });
  } catch (err) {
    throw err;
  }
};
