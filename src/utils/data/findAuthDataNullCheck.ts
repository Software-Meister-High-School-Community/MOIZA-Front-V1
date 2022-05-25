import { IFindPwResetDataProps } from '../interface/FindAuthData';

export const findPwResetDataNullCheck = (data: IFindPwResetDataProps): boolean => {
  let isNull: boolean = false;
  if (data?.pw === '') return true;
  if (data?.checkPw === '') return true;

  isNull = false;
  return isNull;
};
