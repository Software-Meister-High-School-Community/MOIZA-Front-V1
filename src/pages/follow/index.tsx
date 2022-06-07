import React from 'react';
import Follow, { TShowFollow } from '../../components/follow/index';
import { useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { followOwnerState } from '../../store/follow/followOwner';

const FollowPage = () => {
  const { userId, followType } = useParams();
  const setProfileOwnerState = useSetRecoilState(followOwnerState);
  const id = Number(userId);
  const type = followType as TShowFollow;
  setProfileOwnerState({ id, followType: type });
  if (id && type) return <Follow />;
  return <></>;
};
export default FollowPage;
