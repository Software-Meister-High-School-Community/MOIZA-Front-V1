import React from 'react';
import * as S from './style';

const NoticeItem = () => {
  return (
    <S.NoticeDiv>
      <S.NoticeTextDiv>
        <S.NoticeText fixed={true}>ㅇㅁㄹㅇ</S.NoticeText>
        <S.NoticeDate>22/01/21 8:29</S.NoticeDate>
      </S.NoticeTextDiv>
    </S.NoticeDiv>
  );
};

export default NoticeItem;
