import React, { useMemo, useState } from 'react';
import Profile from './profile/index';
import PostList from './postList/index';
import PageNation from '../common/pagenation';
import styled from 'styled-components';
import { IGetUserProfileResponse } from '../../models/users/response';
import { useUserInfo } from '../../hooks/user/useUserInfo';

interface IProps {
  id?: number;
  profileContent: IGetUserProfileResponse;
}

const ProfileComponent: React.FC<IProps> = ({ id, profileContent }) => {
  const [page, setPage] = useState(1);
  const { userInfo } = useUserInfo();
  const isMine = useMemo(() => {
    return id === undefined || id === userInfo.user_id;
  }, [id, userInfo.user_id]);
  const userId = useMemo(() => {
    if (id === undefined) return userInfo.user_id;
    return id;
  }, [id]);
  return (
    <Wrapper>
      <Profile userInfo={profileContent} isMine={isMine} userId={userId} />
      <PostList page={page} userId={userId} name={!isMine ? profileContent.name : undefined} />
      <nav className="pageNation">
        <PageNation total={5} page={page} limit={1} setPage={setPage} />
      </nav>
    </Wrapper>
  );
};
export default ProfileComponent;

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
  > .pageNation {
    margin: 134px 0 375px 0;
  }
`;
