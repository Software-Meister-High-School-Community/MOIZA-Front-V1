import React, { useState } from 'react';
import * as S from './style';
import Dropdown from '../Common/Select/dropdown';
import PostResult from './postResult/PostResult';
import UserResult from './userResult/UserResult';
import useResult from '../../hooks/result/useResult';
import RadioButton from '../common/Select/RadioButton/RadioButton';
import { departmentOptions, sortOptions } from '../Common/Select/dropdown/options';
const Result: React.FC = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    departmentOption,
    setdepartmentOption,
    sortOption,
    setSortOption,
    radios,
  } = useResult();
  return (
    <>
      <S.Container>
        <S.RadioBtnBox>
          <RadioButton
            radioArray={radios}
            name="result"
            selected={selectedRadio}
            setSelected={setSelectedRadio}
          />
        </S.RadioBtnBox>

        <S.DropdownBox>
          <Dropdown
            options={departmentOptions}
            value={departmentOption}
            onChangeValue={setdepartmentOption}
          />
          <Dropdown options={sortOptions} value={sortOption} onChangeValue={setSortOption} />
        </S.DropdownBox>
      </S.Container>
      <UserResult />
      <PostResult />
    </>
  );
};

export default Result;
