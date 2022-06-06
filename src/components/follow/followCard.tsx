import styled from 'styled-components';
import React from 'react';
import { IFollow } from '../../models/follow/response';

interface IProps {
  followInfo: IFollow;
}

const FollowCard: React.FC<IProps> = ({ followInfo: item }) => {
  return (
    <UserInfoBox>
      <img className="profile" alt="profile" />
      <Names>
        <p className="username">{item.name}</p>
        <p className="schoolname">
          {item.school} {item.user_scope}
        </p>
      </Names>
      <Buttons>
        <button className="f4f">맞팔로우</button>
        <button className="removefollowing">삭제</button>
        <button className="following">팔로잉</button>
      </Buttons>
    </UserInfoBox>
  );
};

export default FollowCard;

export const UserInfoBox = styled.li`
  width: 100%;
  height: 98px;
  box-sizing: border-box;
  padding: 21px 18px 22px 24px;
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  > .profile {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
`;
export const Names = styled.strong`
  margin: 11px 0 0 23px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  > .username {
    font-size: 16px;
    line-height: 19px;
  }
  > .schoolname {
    font-size: 12px;
    line-height: 14px;
  }
`;
export const Buttons = styled.section`
  display: flex;
  margin-left: auto;
  align-items: center;
  > button {
    width: 80px;
    height: 44px;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-left: 12px;
    cursor: pointer;
  }
  > .f4f {
    background-color: #0048ff;
    color: #ffffff;
  }
  > .removefollowing {
    background-color: #ffffff;
    color: #999999;
    border: 1px solid #e0e0e0;
  }
  > .following {
    background-color: #ffffff;
    color: #555555;
    border: 1px solid #e0e0e0;
  }
`;
