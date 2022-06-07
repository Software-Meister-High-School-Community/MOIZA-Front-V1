import { useState } from 'react';
import { IGetMyPageResponse } from '../../models/users/response';

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<IGetMyPageResponse>();
  return {
    userInfo: userInfo as IGetMyPageResponse,
    setUserInfo,
  };
};
