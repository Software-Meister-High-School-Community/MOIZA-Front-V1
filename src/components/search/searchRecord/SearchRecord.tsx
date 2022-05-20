import React from 'react';
import * as S from './style';
import { ISearchProps } from '../../../interface/search/Search.type';
import X from '../../../assets/img/common/X.svg';
const SearchRecord: React.FC<ISearchProps> = ({
  visible,
  currentSearch,
  searchRecords,
  onDelete,
  onReset,
}) => {
  return (
    <S.ItemContainer disabled={visible}>
      <S.Text>최근검색어</S.Text>
      <S.TotalDeleteBtn
        onClick={() => {
          onReset();
        }}
      >
        전체 삭제
      </S.TotalDeleteBtn>
      {searchRecords.map(({ id, title }) => (
        <S.ItemBox
          onClick={() => {
            currentSearch(title);
          }}
        >
          <S.Item>{title}</S.Item>
          <S.DeleteBtn
            src={X}
            onClick={() => {
              onDelete(id);
            }}
          />
        </S.ItemBox>
      ))}
    </S.ItemContainer>
  );
};

export default SearchRecord;
