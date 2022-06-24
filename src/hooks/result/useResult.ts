import React, { useState, useEffect } from 'react';
import { TCategory, TFeed, TSort } from '../../models/common';
import { searchFeed } from '../../utils/api/feeds';
import { useRecoilValue } from 'recoil';
import { SearchKeywordState } from '../../store/search/keyword';
import { IGetSearchFeedResponse } from '../../models/feeds/response';
import { searchUser } from '../../utils/api/users';
import { IUserSearchResponse } from '../../models/users/response';

interface IRadio {
  id: TFeed;
  summary: string;
}

const radios: IRadio[] = [
  { id: 'ALL', summary: '전체' },
  { id: 'QUESTION', summary: '질문' },
  { id: 'COMMON', summary: '일반' },
];

const useResult = () => {
  const [selectedRadio, setSelectedRadio] = useState<TFeed>('ALL');
  const [categoryOption, setCategoryOption] = useState<TCategory>('ALL');
  const [sortOption, setSortOption] = useState<TSort>('LATEST');
  const [page, setPage] = useState(1);
  const [feedResults, setFeedResults] = useState<IGetSearchFeedResponse>({
    total_page: 5,
    feed_list: [
      {
        id: 1,
        title: '게시글',
        type: 'QUESTION',
        created_at: '2022-06-23T12:50:30',
        author_name: '강석현',
        is_like: false,
        view_count: 1000,
        like_count: 50,
        comment_count: 10,
      },
      {
        id: 2,
        title: '이거 뭐져ㅛ',
        type: 'QUESTION',
        created_at: '2022-06-23T15:50:30',
        author_name: '강석현',
        is_like: false,
        view_count: 3000,
        like_count: 50,
        comment_count: 10,
      },
      {
        id: 3,
        title: '안녕하세요',
        type: 'COMMON',
        created_at: '2022-06-24T10:50:30',
        author_name: '강석현',
        is_like: false,
        view_count: 10200,
        like_count: 30,
        comment_count: 10,
      },
      {
        id: 4,
        title: '반갑습니다',
        type: 'QUESTION',
        created_at: '2022-07-23T12:50:30',
        author_name: '강석현',
        is_like: false,
        view_count: 1000,
        like_count: 50,
        comment_count: 103,
      },
    ],
  });
  const [userResults, setUserResults] = useState<IUserSearchResponse>({
    user_list: [
      { user_id: 1, name: '강석현', profile_image_url: '', user_scope: 'STUDENT', school: 'DSM' },
      { user_id: 2, name: '전영준', profile_image_url: '', user_scope: 'GRADUATE', school: 'GSM' },
      { user_id: 3, name: '정우재', profile_image_url: '', user_scope: 'USER', school: 'DGSW' },
      { user_id: 4, name: '임동현', profile_image_url: '', user_scope: 'STUDENT', school: 'BSSM' },
      { user_id: 5, name: '장정원', profile_image_url: '', user_scope: 'GRADUATE', school: 'NCMM' },
      { user_id: 6, name: '김범진', profile_image_url: '', user_scope: 'GRADUATE', school: 'NCMM' },
      { user_id: 7, name: '임세현', profile_image_url: '', user_scope: 'USER', school: 'DSM' },
    ],
  });
  const onChangePage = (page: number) => {
    setPage(page);
  };
  const onChangeRadioValue = (value: string) => {
    const radioValue = value as TFeed;
    setSelectedRadio(radioValue);
  };
  const onChangeCategoryOption = (option: string) => {
    const category = option as TCategory;
    setCategoryOption(category);
  };
  const onChangeSortOption = (option: string) => {
    const sortOption = option as TSort;
    setSortOption(sortOption);
  };
  const searchKeyword = useRecoilValue(SearchKeywordState);
  // useEffect(() => {
  //   searchFeed(searchKeyword, categoryOption, selectedRadio, sortOption, page).then(res =>
  //     setFeedResults(res),
  //   );
  // }, [selectedRadio, categoryOption, sortOption, searchKeyword,page]);
  // useEffect(() => {
  //   searchUser(searchKeyword, 0).then(res => setUserResults(res));
  // }, [searchKeyword]);
  return {
    selectedRadio,
    onChangeRadioValue,
    categoryOption,
    setCategoryOption,
    sortOption,
    setSortOption,
    radios,
    onChangeCategoryOption,
    onChangeSortOption,
    userResults,
    feedResults,
    page,
    onChangePage,
  };
};

export default useResult;
