import { TSchool } from '../../models/common';

export const schoolEmailTransform = (school: TSchool): string => {
  switch (school) {
    case 'GSM':
      return '@gsm.hs.kr';

    case 'DGSW':
      return '@dgsw.hs.kr';

    case 'DSM':
      return '@dsm.hs.kr';

    case 'NCMM':
      return '@e-mirim.hs.kr';

    case 'BSSM':
      return '@bssm.hs.kr';

    default:
      return '@gsm.hs.kr';
  }
};
