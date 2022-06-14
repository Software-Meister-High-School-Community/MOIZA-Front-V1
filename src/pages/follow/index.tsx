import React, { useState } from 'react';
import Follow, { TShowFollow } from '../../components/follow/index';
import { useNavigate, useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { followOwnerState } from '../../store/follow/followOwner';
import { useEffect } from 'react';
import { getUserProfile } from '../../utils/api/users';
import useException from '../../hooks/useException';

const FollowPage = () => {
  const [name, setName] = useState('');
  const { userId, followType } = useParams();
  const setProfileOwnerState = useSetRecoilState(followOwnerState);
  const { moveTo404Page } = useException();
  const id = Number(userId);
  const type = followType as TShowFollow;
  useEffect(() => {
    getUserProfile(id)
      .then(res => setName(res.name))
      .catch(err => {
        // todo
        // 에러코드 404일때 처리 추가해야함
      });
  }, [id]);
  useEffect(() => {
    setProfileOwnerState({ id, followType: type });
    if (isNaN(id) || !type) {
      moveTo404Page();
    }
  }, [id, followType]);
  return <Follow name={name} />;
};
export default FollowPage;
