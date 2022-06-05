import { atom } from 'recoil';
import { REPORT, TManageMent } from '../../components/admin/constant';

interface IAdminState {
  managementType: TManageMent;
}

export const managementState = atom<IAdminState>({
  key: 'adminState',
  default: {
    managementType: REPORT,
  },
});

interface IAdminPageNation {
  totalElement: number;
  page: number;
}

export const adminPageNationState = atom<IAdminPageNation>({
  key: 'adminPageNationState',
  default: {
    totalElement: 10,
    page: 1,
  },
});
