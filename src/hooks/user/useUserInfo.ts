import { useState } from 'react';
import { IGetMyPageResponse } from '../../models/users/response';

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<IGetMyPageResponse>({
    name: '강석현',
    school: 'DSM',
    user_id: 1,
    user_scope: 'STUDENT',
    profile_image_url: '',
    link_url: [''],
    feed_count: 111,
    follower_count: 111,
    following_count: 111,
    introduce: '안녕하세요',
    profile_background_color: '#0048FF',
  });
  return {
    userInfo: userInfo as IGetMyPageResponse,
    setUserInfo,
  };
};
