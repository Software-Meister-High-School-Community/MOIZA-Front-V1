import React, { useState, ChangeEvent, FormEvent, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import SearchInPage from '../common/search/searchInPage';
import UserList from './followList';
import Path from '../common/path';
import { PathType } from '../../utils/interface/common';
import { useRecoilValue } from 'recoil';
import { followOwnerState } from '../../store/follow/followOwner';
import { getUserProfile } from '../../utils/api/users';
import { IGetUserProfileResponse } from '../../models/users/response';

export type TShowFollow = 'following' | 'follower';

const Follow: React.FC = () => {
  const { id } = useRecoilValue(followOwnerState);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [ownerInfo, setOwnerInfo] = useState<IGetUserProfileResponse>();
  const pathArray: PathType[] = useMemo(() => {
    return [
      {
        path: '프로필',
        link: `/profile/${id}`,
      },
      {
        path: '팔로워 / 팔로잉',
        link: '',
      },
    ];
  }, [id]);
  useEffect(() => {
    getUserProfile(id).then(res => setOwnerInfo(res));
  }, [id]);
  const onChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const onSubmitSearchKeyword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Path pathArray={pathArray} />
      {ownerInfo && (
        <>
          <UserName>{ownerInfo.name}</UserName>
          <SearchInPage
            width="175"
            value={searchKeyword}
            placeholder=""
            fontsize="14"
            heigth="35"
            onChange={onChangeSearchKeyword}
            onSubmit={onSubmitSearchKeyword}
          />
          <UserList />
        </>
      )}
    </Wrapper>
  );
};
export default Follow;

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
  > .searchInPage {
    display: flex;
    justify-content: flex-end;
    margin: 28px 0;
  }
`;
const UserName = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  margin-top: 70px;
`;
