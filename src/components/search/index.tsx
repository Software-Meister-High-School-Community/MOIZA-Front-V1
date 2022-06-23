import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import OutsideClickHandler from 'react-outside-click-handler';
import SearchRecord from './searchRecord';
import useSearch from '../../hooks/search/useSearch';
import searchIcon from '../../assets/img/common/searchIcon.svg';
import { useParams } from 'react-router';
const Search: React.FC = () => {
  const {
    handleDelteSearchRecord,
    onSearch,
    handleResetSearchRecords,
    searchEl,
    disabled,
    visible,
    setVisble,
    currentSearch,
    setCurrentSearch,
    setDisabled,
    searchRecords,
  } = useSearch();
  const { keyword } = useParams();
  useEffect(() => {
    if (keyword) setCurrentSearch(keyword);
  }, [keyword]);
  return (
    <S.Wrapper>
      <S.Title>검색</S.Title>
      <S.SearchWrapper>
        <OutsideClickHandler onOutsideClick={() => setVisble(false)}>
          <S.Container>
            <S.Input
              onKeyPress={e => {
                const searchRecord = searchEl.current?.value;
                if (e.key === 'Enter' && searchRecord) onSearch(searchRecord);
              }}
              ref={searchEl}
              autoFocus
              onFocus={() => {
                setDisabled(true);
                setVisble(true);
              }}
              onBlur={() => setDisabled(false)}
              placeholder="검색어를 입력하세요"
              value={currentSearch}
              onChange={e => {
                setCurrentSearch(e.target.value);
              }}
            />
            <S.SubmitButton
              disabled={disabled}
              onClick={e => {
                e.preventDefault();
                const searchRecord = searchEl.current?.value;
                searchRecord && onSearch(searchRecord);
              }}
            >
              <S.Img src={searchIcon} />
            </S.SubmitButton>
          </S.Container>
          <SearchRecord
            onReset={handleResetSearchRecords}
            visible={visible}
            searchRecords={searchRecords}
            onDelete={handleDelteSearchRecord}
          />
        </OutsideClickHandler>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
