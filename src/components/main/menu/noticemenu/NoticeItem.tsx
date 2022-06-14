import React from 'react';
import * as S from './style';
import { INoticeResponse } from '../../../../models/notice/response';

const NoticeItem: React.FC<{ item: INoticeResponse }> = ({ item }) => {
  return (
    <S.NoticeDiv>
      <S.NoticeTextDiv>
        <S.NoticeText fixed={true}>{item.title}</S.NoticeText>
        <S.NoticeDate>{item.created_at}</S.NoticeDate>
      </S.NoticeTextDiv>
    </S.NoticeDiv>
  );
};

export default NoticeItem;
