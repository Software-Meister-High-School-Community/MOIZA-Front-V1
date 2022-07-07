import React, { useEffect, useState } from 'react';
import fixed from '../../../assets/img/notice/fixedNotification.svg';
import nomal from '../../../assets/img/notice/notification.svg';
import Path from '../../common/path';
import { noticePostPathArr } from '../constant';
import * as S from './style';
import { INoticeDetailsResponse } from '../../../models/notice/response';
import { useParams } from 'react-router';
import { getNoticeDetails } from '../../../utils/api/notice';

const ShowNotice: React.FC = () => {
  const [detailData, setDetailData] = useState<INoticeDetailsResponse>();

  const param = useParams();

  /*
  useEffect(() => {
    getNoticeDetails();
  }, []);
  */

  return (
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={noticePostPathArr} />
      </S.NoticeHeadDiv>
      <S.PostDiv>
        <S.PostHead>
          <S.PostLogo src={fixed} alt="" />
          <S.PostName fixed={true}>안녕하세요{/*detailData.title */}</S.PostName>
          <S.PostTime>22/01/21 8:29{/*detailData.created_at */}</S.PostTime>
        </S.PostHead>
        <S.PostBody>
          <S.BodyText>안녕하세요 여러분 저희는 모이자입니다.{/*detailData.content */}</S.BodyText>
        </S.PostBody>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default ShowNotice;
