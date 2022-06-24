import React, { useState } from 'react';
import * as S from './style';
import Dropdown from '../common/select/dropdown';
import PostResult from './postResult';
import UserResult from './userResult';
import useResult from '../../hooks/result/useResult';
import RadioButton from '../common/select/radioButton';
import { departmentOptions, sortOptions } from '../common/select/dropdown/options';
import { IUserSearchResponse } from '../../models/users/response';

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
  } = useResult();
  return (
    <>
      <S.Container>
        <S.SearchResult>
          <p className="keyword">정원</p>에 대한 검색결과는 총&nbsp;<p className="totalCount">2</p>
          건 입니다.
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
        <PostResult />
      </S.Container>
    </>
  );
};

export default Result;
