import instance from '../../axios';

export const removePost = async (feedId: number) => {
  return await instance.post(`/feeds/${feedId}`);
};
