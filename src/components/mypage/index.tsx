import React, { useState } from 'react';
import * as S from './styles';
import Profile from './profile/index';
import PostList from './postList/index';
import PageNation from '../common/pagenation';
import { IGetMyPageResponse } from '../../models/users/response';

const MyPageComponent: React.FC = () => {
  const [isMine, setIsMine] = useState(false);
  const [page, setPage] = useState(1);
  const [profileContent, setProfileContent] = useState<IGetMyPageResponse>();
  return (
    <S.Wrapper>
      <S.UserColorBox color={'#FFB500'} />
      <Profile isMine={isMine} />
      <PostList isMine={isMine} page={page} />
      <nav className="pageNation">
        <PageNation total={5} page={page} limit={1} setPage={setPage} />
      </nav>
    </S.Wrapper>
  );
};
export default MyPageComponent;
