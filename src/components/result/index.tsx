import React, { useState } from 'react';
import * as S from './style';
import Dropdown from '../common/select/dropdown';
import PostResult from './postResult';
import UserResult from './userResult';
import useResult from '../../hooks/result/useResult';
import RadioButton from '../common/select/radioButton';
import { departmentOptions, sortOptions } from '../common/select/dropdown/options';
import { IUserSearchResponse } from '../../models/users/response';
import { IGetSearchFeedResponse } from '../../models/feeds/response';
import Pageination from '../common/pagenation';

const Result = () => {
  const {
    selectedRadio,
    onChangeRadioValue,
    categoryOption,
    sortOption,
    radios,
    onChangeCategoryOption,
    onChangeSortOption,
    userResults,
    feedResults,
    page,
    onChangePage,
    searchKeyword,
  } = useResult();
  return (
    <>
      <S.Container>
        <S.SearchResult>
          <p className="keyword">{searchKeyword}</p>에 대한 검색결과는 총&nbsp;
          <p className="totalCount">{feedResults.total_page + userResults.user_list.length}</p>건
          입니다.
        </S.SearchResult>
        <UserResult userResult={userResults as IUserSearchResponse} />
        <S.Options>
          <RadioButton
            radioArray={radios}
            name="result"
            selected={selectedRadio}
            setSelected={onChangeRadioValue}
          />
          <S.DropdownBox>
            <Dropdown
              options={departmentOptions}
              value={categoryOption}
              onChangeValue={onChangeCategoryOption}
            />
            <Dropdown options={sortOptions} value={sortOption} onChangeValue={onChangeSortOption} />
          </S.DropdownBox>
        </S.Options>
        <PostResult feedResults={feedResults as IGetSearchFeedResponse} />
        <Pageination total={10} limit={5} page={page} setPage={onChangePage} />
      </S.Container>
    </>
  );
};

export default Result;
