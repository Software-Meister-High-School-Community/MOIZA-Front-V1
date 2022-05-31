import React, { useEffect, useState } from 'react';
import * as S from './styles';
import RadioButton from '../../common/select/radioButton';
import { mypageOptionArray } from '../constant';
import Dropdown from '../../common/select/dropdown/index';
import { departmentOptions, sortOptions } from '../../common/select/dropdown/options';
import { IGetFeedListResponse } from '../../../models/feeds/response';
import { getFeedList } from '../../../utils/api/feeds';
import PostForm from '../../common/form/postForm';
import { TCategory, TFeed, TSort } from '../../../models/common';
import { useUserInfo } from '../../../hooks/user/useUserInfo';

interface PropsType {
  isMine: boolean;
  page: number;
}

const PostList: React.FC<PropsType> = ({ isMine, page }) => {
  const [selectedOption, setSelectedOption] = useState<TFeed>('ALL');
  const [field, setField] = useState(departmentOptions[0].value);
  const [sort, setSort] = useState(sortOptions[0].value);
  const [feedList, setFeedList] = useState<IGetFeedListResponse>();
  const { userInfo } = useUserInfo();
  const onChangeFiled = (field: string) => {
    const fieldValue = field as TCategory;
    setField(fieldValue);
  };
  const onChangeSort = (sort: string) => {
    const sortValue = sort as TSort;
    setSort(sortValue);
  };
  useEffect(() => {
    getFeedList(1, field, selectedOption, sort, page).then(res => setFeedList(res));
  }, [field, selectedOption, sort, page]);
  return (
    <S.Wrapper>
      <S.Options>
        <S.Title>
          {isMine ? (
            '나'
          ) : (
            <>
              <p>{userInfo.name}</p>님
            </>
          )}
          의 게시글
        </S.Title>
        <RadioButton
          name="mypageOption"
          selected={selectedOption}
          setSelected={setSelectedOption}
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
