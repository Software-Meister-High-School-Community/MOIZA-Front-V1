import React, { useState } from 'react';
import * as S from './styles';
import Profile from './profile/index';
import PostList from './postList/index';
import PageNation from '../common/pagenation';
import { IGetUserProfileResponse } from '../../models/users/response';

interface IProps {
  id: number;
}

interface IProfileContent extends IGetUserProfileResponse {
  user_id?: number;
}

const ProfileComponent: React.FC<IProps> = ({ id }) => {
  const [isMine, setIsMine] = useState(false);
  const [page, setPage] = useState(1);
  const [profileContent, setProfileContent] = useState<IProfileContent>();
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
export default ProfileComponent;
