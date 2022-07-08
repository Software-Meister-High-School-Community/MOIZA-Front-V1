import React from 'react';
import * as S from './style';
import { INoticeResponse } from '../../../../models/notice/response';
import { INoticeDetailProps } from '../../../../utils/interface/Notice';

//INoticeResponse로 더미데이터 끝나고 수정하기

const NoticeItem: React.FC<{ item: INoticeDetailProps }> = ({ item }) => {
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
