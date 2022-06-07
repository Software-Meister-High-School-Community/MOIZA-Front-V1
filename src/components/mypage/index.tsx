import React, { useState } from 'react';
import Profile from './profile/index';
import PostList from './postList/index';
import PageNation from '../common/pagenation';
import { IGetMyPageResponse } from '../../models/users/response';
import styled from 'styled-components';

interface IProps {
  id: number;
}

const ProfileComponent: React.FC<IProps> = ({ id }) => {
  const [isMine, setIsMine] = useState(false);
  const [page, setPage] = useState(1);
  const [profileContent, setProfileContent] = useState<IGetMyPageResponse>();
  return (
    <Wrapper>
      <Profile id={id} isMine={isMine} />
      <PostList isMine={isMine} page={page} />
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
