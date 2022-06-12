import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import RadioButton from '../../common/select/radioButton';
import { mypageOptionArray } from '../constant';
import Dropdown from '../../common/select/dropdown/index';
import { departmentOptions, sortOptions } from '../../common/select/dropdown/options';
import { IGetFeedListResponse } from '../../../models/feeds/response';
import { getFeedList } from '../../../utils/api/feeds';
import PostForm from '../../common/form/postForm';
import { TCategory, TFeed, TSort } from '../../../models/common';

interface PropsType {
  page: number;
  userId: number;
  name?: string;
}

const PostList: React.FC<PropsType> = ({ page, userId, name }) => {
  const [selectedOption, setSelectedOption] = useState<TFeed>('ALL');
  const [field, setField] = useState(departmentOptions[0].value);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [feedList, setFeedList] = useState<IGetFeedListResponse>();
  const onChangeFeedType = (feed: string) => {
    const feedValue = feed as TFeed;
    setSelectedOption(feedValue);
  };
  const onChangeFiled = (field: string) => {
    const fieldValue = field as TCategory;
    setField(fieldValue);
  };
  const onChangeSort = (sort: string) => {
    const sortValue = sort as TSort;
    setSort(sortValue);
  };
  useEffect(() => {
    getFeedList(userId, field, selectedOption, sort, page).then(res => setFeedList(res));
  }, [field, selectedOption, sort, page]);
  const profileTitle = useMemo(() => {
    if (name === undefined) return '나';
    return (
      <>
        <p>{name}</p>님
      </>
    );
  }, []);
  return (
    <S.Wrapper>
      <S.Options>
        <S.Title>{profileTitle}의 게시글</S.Title>
        <RadioButton
          name="mypageOption"
          selected={selectedOption}
          setSelected={onChangeFeedType}
          radioArray={mypageOptionArray}
        />
        <Dropdown options={departmentOptions} value={field} onChangeValue={onChangeFiled} />
        <Dropdown options={sortOptions} value={sort} onChangeValue={onChangeSort} />
      </S.Options>
      <S.List>
        {feedList &&
          feedList.feed_list.map((item, index) => {
            return <PostForm item={item} />;
          })}
      </S.List>
    </S.Wrapper>
  );
};
export default PostList;
