import { IPostImageRequest } from '../../../models/default/request';
import { IPostImageResponse } from '../../../models/default/response';
import instance from '../../axios';

export const postImages = async (body: IPostImageRequest): Promise<IPostImageResponse> => {
  try {
    return await instance.post('images', body);
  } catch (err) {
    throw err;
  }
};
