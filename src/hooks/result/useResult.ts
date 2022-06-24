import React, { useState, useEffect } from 'react';
import { TCategory, TFeed, TSort } from '../../models/common';
import { searchFeed } from '../../utils/api/feeds';
import { useRecoilValue } from 'recoil';
import { SearchKeywordState } from '../../store/search/keyword';

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
  useEffect(() => {
    searchFeed(searchKeyword, categoryOption, selectedRadio, sortOption, 0);
  }, [selectedRadio, categoryOption, sortOption, searchKeyword]);
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
  };
};

export default useResult;
