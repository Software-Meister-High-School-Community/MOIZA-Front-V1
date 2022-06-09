import React from 'react';
import styled from 'styled-components';
import { TShowFollow } from './index';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { followOwnerState } from '../../store/follow/followOwner';

interface IProps {
  followCount: {
    follower: number;
    following: number;
  };
}

const FollowListType: React.FC<IProps> = ({ followCount }) => {
  const navigate = useNavigate();
  const { followType, id } = useRecoilValue(followOwnerState);
  const onChangeShowFollowType = (type: TShowFollow) => {
    navigate(`/profile/${id}/${type}`);
  };
  return (
    <SelectFollowType>
      <button
        onClick={() => onChangeShowFollowType('follower')}
        className={followType === 'follower' ? 'selected follower' : 'follower'}
      >
        <p>{followCount.follower}</p>&nbsp;팔로워
      </button>
      <button
        onClick={() => onChangeShowFollowType('following')}
        className={followType === 'following' ? 'selected following' : 'following'}
      >
        <p>{followCount.following}</p>&nbsp;팔로잉
      </button>
    </SelectFollowType>
  );
};

export default FollowListType;

const SelectFollowType = styled.strong`
  display: flex;
  width: 100%;
  margin-top: 93px;
  > button {
    width: 50%;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #555555;
    padding-bottom: 31px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
  }
  > .selected {
    border-bottom: 1px solid #0048ff;
    color: #0048ff;
  }
`;
