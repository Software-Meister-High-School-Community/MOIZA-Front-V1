import instance from '../../axios';
import {
  IPatchUserRequest,
  ISearchUserRequest,
  ISignUpRequest,
  IVerifyGraduateRequest,
} from '../../../models/users/request';
import {
  IGetMyPageResponse,
  IGetUserProfileResponse,
  IGetUserSearchHistory,
  IUserSearchResponse,
} from '../../../models/users/response';

export const signup = async (body: ISignUpRequest) => {
  await instance.post('/users', body);
};

export const getMyPage = async (): Promise<IGetMyPageResponse> => {
  try {
    return await instance.get('/users');
  } catch (err) {
    throw err;
  }
};

export const signOut = async () => {
  try {
    await instance.delete('/users');
  } catch (err) {
    throw err;
  }
};

export const userReport = async (userId: number) => {
  try {
    await instance.post(`/users/${userId}/reports`);
  } catch (err) {
    throw err;
  }
};

export const deleteSearchHistory = async (historyId: number) => {
  try {
    await instance.delete(`/users/searching/history/${historyId}`);
  } catch (err) {
    throw err;
  }
};

export const getUserSearchHistory = async (): Promise<IGetUserSearchHistory> => {
  try {
    return await instance.get('/users/searching/history');
  } catch (err) {
    throw err;
  }
};

export const searchUser = async ({
  name,
  page,
}: ISearchUserRequest): Promise<IUserSearchResponse> => {
  try {
    return await instance.get(`/users/searching/name=${name}&page=${page}`);
  } catch (err) {
    throw err;
  }
};

export const verifyGraduate = async (body: IVerifyGraduateRequest) => {
  try {
    await instance.post('/users/graduate-verifications', body);
  } catch (err) {
    throw err;
  }
};

export const patchUser = async (body: IPatchUserRequest) => {
  try {
    await instance.patch('/users', body);
  } catch (err) {
    throw err;
  }
};

export const getUserProfile = async (userId: number): Promise<IGetUserProfileResponse> => {
  try {
    return await instance.get(`/users/${userId}`);
  } catch (err) {
    throw err;
  }
};
