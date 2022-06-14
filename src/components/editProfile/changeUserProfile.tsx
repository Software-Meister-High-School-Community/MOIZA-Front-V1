import React, { ChangeEvent, ChangeEventHandler, useMemo, useState } from 'react';
import styled from 'styled-components';
import defaultImg from '../../assets/img/common/userDefaultIcon.svg';

interface IProps {
  profile: File | null;
  onChangeProfileImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChangeUserProfile: React.FC<IProps> = ({ profile, onChangeProfileImage }) => {
  const profileImage = useMemo(() => {
    if (!profile) return defaultImg;
    return URL.createObjectURL(profile);
  }, [profile]);
  return (
    <ProfileImg>
      <img className="profileImg" src={profileImage} alt="프로필" />
      <label className="changeProfileLabel">
        프로필 사진 바꾸기
        <input type="file" onChange={onChangeProfileImage} />
      </label>
    </ProfileImg>
  );
};
export default ChangeUserProfile;

const ProfileImg = styled.div`
  margin-left: 36px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > .profileImg {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: -44px;
    background-color: #ffffff;
  }
  .changeProfileLabel {
    box-sizing: border-box;
    width: 158px;
    height: 40px;
    border: 1px solid #e0e0e0;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10.5px 0;
    margin-top: 20px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    > input[type='file'] {
      width: 0;
      height: 0;
    }
  }
`;
