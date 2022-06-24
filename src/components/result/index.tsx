import React, { useState } from 'react';
import * as S from './style';
import Dropdown from '../common/select/dropdown';
import PostResult from './postResult';
import UserResult from './userResult';
import useResult from '../../hooks/result/useResult';
import RadioButton from '../common/select/radioButton';
import { departmentOptions, sortOptions } from '../common/select/dropdown/options';

const Result = () => {
  const {
    selectedRadio,
    onChangeRadioValue,
    categoryOption,
    sortOption,
    radios,
    onChangeCategoryOption,
    onChangeSortOption,
  } = useResult();
  return (
    <>
      <S.Container>
        <S.RadioBtnBox>
          <RadioButton
            radioArray={radios}
            name="result"
            selected={selectedRadio}
            setSelected={onChangeRadioValue}
          />
        </S.RadioBtnBox>

        <S.DropdownBox>
          <Dropdown
            options={departmentOptions}
            value={categoryOption}
            onChangeValue={onChangeCategoryOption}
          />
          <Dropdown options={sortOptions} value={sortOption} onChangeValue={onChangeSortOption} />
        </S.DropdownBox>
      </S.Container>
      <UserResult />
      <PostResult />
    </>
  );
};

export default Result;
