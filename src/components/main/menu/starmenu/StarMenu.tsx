import { useState, useEffect } from 'react';
import * as S from './style';
import StarPost from './StarPost';
import { getPopularFeeds } from '../../../../utils/api/feeds';
import { IGetIPopularFeedListResponse } from '../../../../models/feeds/response';

const StarMenu: React.FC = () => {
  const [popularFeed, setPopularFeed] = useState<IGetIPopularFeedListResponse[]>([]);

  useEffect(() => {
    getPopularFeeds()
      .then(res => {
        //setPopularFeed(res);
      })
      .catch();
  }, []);

  return (
    <S.Wrapper>
      <div>
        <S.StarName width="230px" height="35px" margin="0 542px 21px 0">
          일일 인기게시물
        </S.StarName>
        <S.HR width="760px" height="3px" background="#99B6FF" />
        <S.PostList>
          <StarPost />
          {/*popularFeed &&
            popularFeed.feed_list.map((item, index) => <StarPost feed_list={item} key={index} />)*/}
        </S.PostList>
      </div>
    </S.Wrapper>
  );
};

export default StarMenu;
