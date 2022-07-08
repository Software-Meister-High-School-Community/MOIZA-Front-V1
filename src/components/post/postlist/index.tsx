import React, { useMemo, useState, useEffect } from 'react';
import * as S from './style';
import Vector from '../../../assets/img/post/vector.svg';
import Write from '../../../assets/img/common/writePen.svg';
import Path from '../../common/path';
import Dropdown from '../../common/select/dropdown';
import RadioButton from '../../common/select/radioButton';
import { typeArr } from '../constant';
import PostForm from '../../common/form/postForm';
import PagiNation from '../../common/pagenation';
import { sortOptions } from '../../common/select/dropdown/options';
import { PathType } from '../../../utils/interface/common';
import { IGetFeedListResponse } from '../../../models/feeds/response';
import { getFeedList } from '../../../utils/api/feeds';
import { TCategory, TFeed, TSort } from '../../../models/common';
import { useUserInfo } from '../../../hooks/user/useUserInfo';
import { Link } from 'react-router-dom';
import { IFeedResponse } from '../../../models/feeds/response';
import { IPostListDataProps } from '../../../utils/interface/Post';

interface IProps {
  categoryType: TCategory;
  categoryName: string;
  id?: number;
}

const PostList: React.FC<IProps> = ({ categoryType, categoryName, id }) => {
  const [sort, setSort] = useState(sortOptions[0].value);
  const [selectedOption, setSelectedOption] = useState<TFeed>('ALL');
  const [pagenation, setPagenation] = useState(1);
  const [postList, setPostList] = useState<IPostListDataProps>(); //IGetFeedListResponse 더미데이터 처리 후 나중에 다시 고치기
  const { userInfo } = useUserInfo();

  const exampleData = {
    total_page: 1,
    feed_list: [
      {
        id: 1,
        title: '이건 어떻게 하는 건가요?',
        type: selectedOption,
        created_at: '22/01/21  8:29',
        author_name: '홍길동',
        is_like: false,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '하이 헬로',
        type: selectedOption,
        created_at: '22/01/21  8:29',
        author_name: '김철수',
        is_like: false,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
      {
        id: 1,
        title: '안녕하세요',
        type: selectedOption,
        created_at: '22/01/21  8:29',
        author_name: '이용진',
        is_like: true,
        view_count: 100,
        like_count: 100,
        comment_count: 4,
      },
    ],
  };

  const onChangeSort = (sort: string) => {
    const sortValue = sort as TSort;
    setSort(sortValue);
  };
  const onChangeFeedType = (feed: string) => {
    const feedValue = feed as TFeed;
    setSelectedOption(feedValue);
  };

  const userId = useMemo(() => {
    if (id === undefined) return userInfo.user_id;
    return id;
  }, [id]);

  useEffect(() => {
    setPostList(exampleData);
    // getFeedList(userId, categoryType, selectedOption, sort, pagenation).then(res =>
    //   setPostList(exampleData), 더미 데이터 끝나고 수정하기
    // );
  }, []);

  const pathArray: PathType[] = useMemo(() => {
    return [
      {
        path: '카테고리',
        link: `/category`,
      },
      {
        path: categoryType,
        link: '',
      },
    ];
  }, [categoryType]);

  return (
    <>
      <Link to={`/postwrite/${categoryType}`}>
        <S.WriteBtn>
          <img src={Write} alt="" />
        </S.WriteBtn>
      </Link>
      <S.Wrapper>
        <S.PostHeadDiv>
          <Path pathArray={pathArray} />
          <S.PostNameDiv>
            <S.PostName>{categoryName} 커뮤니티</S.PostName>
            <S.PostVector src={Vector} alt="" />
          </S.PostNameDiv>
        </S.PostHeadDiv>
        <S.PostDiv>
          <S.SelectDiv>
            <S.RadioBtnDiv>
              <RadioButton
                selected={selectedOption}
                setSelected={onChangeFeedType}
                radioArray={typeArr}
                name="typecheckbox"
              />
            </S.RadioBtnDiv>
            <Dropdown value={sort} onChangeValue={onChangeSort} options={sortOptions} />
          </S.SelectDiv>
          <S.PosFormtDiv>
            {postList &&
              postList.feed_list.map((item, index) => {
                // Link 수정하기
                return (
                  <Link to="/category/FRONT-END/1">
                    <PostForm item={item} key={index} />
                  </Link>
                );
              })}
          </S.PosFormtDiv>
        </S.PostDiv>
        <nav className="pagenation">
          <PagiNation total={5} limit={1} page={pagenation} setPage={setPagenation} />
        </nav>
      </S.Wrapper>
    </>
  );
};

export default PostList;
