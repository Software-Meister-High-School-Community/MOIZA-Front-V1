import React from 'react';
import * as S from './style';
import { ISearchProps } from '../../../utils/interface/Search';
import X from '../../../assets/img/common/X.svg';
import { Link } from 'react-router-dom';
const SearchRecord: React.FC<ISearchProps> = ({ visible, searchRecords, onDelete, onReset }) => {
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
        <S.ItemBox>
          <Link to={`/search/${title}`}>
            <S.Item>{title}</S.Item>
          </Link>
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
