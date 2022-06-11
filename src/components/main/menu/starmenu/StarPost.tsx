import React from 'react';
import * as S from './style';
import OnHeartBtn from '../../../../assets/img/common/onHeart.svg';
import OFFHeartBtn from '../../../../assets/img/common/offHeart.svg';
import BookRead from '../../../../assets/img/common/normalPostIcon.svg';
import Question from '../../../../assets/img/common/questionPostIcon.svg';
import { IGetIPopularFeedListResponse } from '../../../../models/feeds/response';

const StarPost: React.FC = () => {
  return (
    <>
      <S.StarPost>
        <S.PostHead>
          <S.UserDiv>
            <S.PostIcon src={Question} alt="" />
            <S.PostUser>OOO님의 게시물</S.PostUser>
          </S.UserDiv>
          <S.PostField>Design</S.PostField>
        </S.PostHead>
        <S.PostText>내용</S.PostText>
        <S.PostFooter>
          <S.HeartDiv>
            <img src={OFFHeartBtn} alt="Heart" />
            <S.HeartCount>123</S.HeartCount>
          </S.HeartDiv>
          <S.PostDate>01/21 8:29</S.PostDate>
        </S.PostFooter>
      </S.StarPost>
    </>
  );
};

export default StarPost;
