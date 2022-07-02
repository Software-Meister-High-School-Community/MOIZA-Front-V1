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

interface IProps {
  categoryType: TCategory;
  categoryName: string;
  id?: number;
}

const PostList: React.FC<IProps> = ({ categoryType, categoryName, id }) => {
  const [sort, setSort] = useState(sortOptions[0].value);
  const [selectedOption, setSelectedOption] = useState<TFeed>('ALL');
  const [pagenation, setPagenation] = useState(1);
  const [postList, setPostList] = useState<IGetFeedListResponse>();
  const { userInfo } = useUserInfo();

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
    getFeedList(userId, categoryType, selectedOption, sort, pagenation);
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
      <S.WriteBtn>
        <img src={Write} alt="" />
      </S.WriteBtn>
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
                return <PostForm item={item} key={index} />;
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
