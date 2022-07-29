import React from 'react';
import * as S from './style';
import TempPen from '../../../../assets/img/post/TempPen.svg';
import { IGetTemporariesFeedListResponse } from '../../../../models/feeds/response';
import { deleteTemporaries } from '../../../../utils/api/feeds';

const TempPost: React.FC<{
  /* item: IGetTemporariesFeedListResponse*/
}> = ({}) => {
  const temporariesDelete = () => {
    //deleteTemporaries();
  };

  return (
    <S.Wrapper>
      <S.List>
        <S.Title>
          <img src={TempPen} alt="" />
          <h1>질문이써용~~~</h1>
        </S.Title>
        <S.Date>
          <span>22/06/22 8:01</span>
          <S.Line />
        </S.Date>
        <S.StateDiv>
          <S.FetchState>
            <p>수정</p>
          </S.FetchState>
          <S.DeleteState onClick={temporariesDelete}>
            <p>삭제</p>
          </S.DeleteState>
        </S.StateDiv>
      </S.List>
    </S.Wrapper>
  );
};

export default TempPost;
