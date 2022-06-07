import React, { useEffect } from 'react';
import Follow, { TShowFollow } from '../../components/follow/index';
import { useNavigate, useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { followOwnerState } from '../../store/follow/followOwner';

const FollowPage = () => {
  const { userId, followType } = useParams();
  const setProfileOwnerState = useSetRecoilState(followOwnerState);
  const id = Number(userId);
  const type = followType as TShowFollow;
  const navigate = useNavigate();
  useEffect(() => {
    setProfileOwnerState({ id, followType: type });
    if (isNaN(id) || !type) {
      navigate('/404');
    }
  }, [userId, followType]);
  return <Follow />;
};
export default FollowPage;
