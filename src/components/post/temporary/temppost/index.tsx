import React from 'react';
import * as S from './style';
import TempPen from '../../../../assets/img/post/TempPen.svg';

const TempPost: React.FC = () => {
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
          <S.DeleteState>
            <p>삭제</p>
          </S.DeleteState>
        </S.StateDiv>
      </S.List>
    </S.Wrapper>
  );
};

export default TempPost;
