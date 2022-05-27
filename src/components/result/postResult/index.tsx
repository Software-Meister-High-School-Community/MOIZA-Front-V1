import React from 'react';
import PostForm from '../../common/postform';
import * as S from './style';
const PostResult: React.FC = () => {
  return (
    <S.Wapper>
      <S.Title>게시물</S.Title>
      <S.Container>
        <PostForm />
      </S.Container>
    </S.Wapper>
  );
};

export default PostResult;
