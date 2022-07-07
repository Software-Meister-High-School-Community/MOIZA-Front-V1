import { useState, useEffect } from 'react';
import * as S from './style';
import StarPost from './StarPost';
import { getPopularFeeds } from '../../../../utils/api/feeds';
import { IGetIPopularFeedListResponse } from '../../../../models/feeds/response';
import { IGetIPopularFeedListProps } from '../../../../utils/interface/Post';

// 더미데이터 끝나고 바꾸기

const StarMenu: React.FC = () => {
  const [popularFeed, setPopularFeed] = useState<IGetIPopularFeedListProps>();

  const exampleData = {
    feed_list: [
      {
        id: 1,
        title: '안녕하세요 궁금해서 올렸습니다',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '홍길동',
        is_like: false,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '하이 헬로',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '김철수',
        is_like: false,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: 'ALL',
        created_at: '01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
    ],
  };

  useEffect(() => {
    setPopularFeed(exampleData);
    // getPopularFeeds()
    //   .then(res => {
    //     //setPopularFeed(res);
    //   })
    //   .catch();
  }, []);

  return (
    <S.Wrapper>
      <div>
        <S.StarName width="230px" height="35px" margin="0 542px 21px 0">
          일일 인기게시물
        </S.StarName>
        <S.HR width="760px" height="3px" background="#99B6FF" />
        <S.PostList>
          {popularFeed &&
            popularFeed.feed_list.map((item, index) => <StarPost item={item} key={index} />)}
        </S.PostList>
      </div>
    </S.Wrapper>
  );
};

export default StarMenu;
