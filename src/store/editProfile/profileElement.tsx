import { atom } from 'recoil';
import { IPatchUserRequest } from '../../models/users/request';

export const profileElementState = atom<IPatchUserRequest>({
  key: 'profileElementState',
  default: {
    profile_image_url: '',
    profile_background_color: '#FFB500',
    introduce: '',
    introduce_link_url: [],
  },
});
