import { atom } from 'recoil';
import { TShowFollow } from '../../components/follow';

interface IFollowOwnerState {
  id: number;
  followType: TShowFollow;
}

export const followOwnerState = atom<IFollowOwnerState>({
  key: 'followOwner',
  default: {
    id: 0,
    followType: 'following',
  },
});
