import React from 'react';
import PostForm from '../../common/form/postForm';
import * as S from './style';
import { IGetSearchFeedResponse } from '../../../models/feeds/response';

interface IProps {
  feedResults: IGetSearchFeedResponse;
}

const PostResult: React.FC<IProps> = ({ feedResults }) => {
  return (
    <S.Wapper>
      <S.Title>게시물</S.Title>
      <S.Container>
        {feedResults.feed_list.map(item => (
          <PostForm item={item} />
        ))}
      </S.Container>
    </S.Wapper>
  );
};

export default PostResult;
