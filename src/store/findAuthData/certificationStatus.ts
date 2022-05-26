import { atom } from 'recoil';
import { IFindSendCertificationNumber } from '../../utils/interface/FindAuthData';

export const sendCertificationNumberStatus = atom<IFindSendCertificationNumber>({
  key: 'sendCertificationNumberStatus',
  default: {
    findIdSendNumber: false,
    findPwSendNumber: false,
  },
});
