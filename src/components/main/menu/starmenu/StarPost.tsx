import React from 'react';
import * as S from './style';
import OnHeartBtn from '../../../../assets/img/common/onHeart.svg';
import OFFHeartBtn from '../../../../assets/img/common/offHeart.svg';
import BookRead from '../../../../assets/img/common/normalPostIcon.svg';
import Question from '../../../../assets/img/common/questionPostIcon.svg';
import { IFeedResponse } from '../../../../models/feeds/response';
import { IFeedProps } from '../../../../utils/interface/Post';

const StarPost: React.FC<{ item: IFeedProps }> = ({ item }) => {
  return (
    <>
      <S.StarPost>
        <S.PostHead>
          <S.UserDiv>
            <S.PostIcon src={Question} alt="" />
            <S.PostUser>{item.author_name}님의 게시물</S.PostUser>
          </S.UserDiv>
          <S.PostField>Design</S.PostField>
        </S.PostHead>
        <S.PostText>오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기</S.PostText>
        <S.PostFooter>
          <S.HeartDiv>
            <img src={OFFHeartBtn} alt="Heart" />
            <S.HeartCount>{item.like_count}</S.HeartCount>
          </S.HeartDiv>
          <S.PostDate>{item.created_at}</S.PostDate>
        </S.PostFooter>
      </S.StarPost>
    </>
  );
};

export default StarPost;
