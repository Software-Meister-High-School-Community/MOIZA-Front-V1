import React, { useEffect } from 'react';
import * as S from './style';
import { useSelectColor } from '../../hooks/recommendation/useSelectColor';
import { dateTransform } from '../../utils/function/dateTransform';
import questionIcon from '../../assets/img/recommendation/questionIcon.svg';
import commonIcon from '../../assets/img/recommendation/commonIcon.svg';
const Recommendation = () => {
  const items = [
    {
      id: 0,
      type: 'q',
      title: '팝아트에 대해서 질문 드립니다',
      name: '장정원',
      date: '2021-10-20T12:12:12',
    },
    {
      id: 0,
      type: 't',
      title: '팝아트에 대해서 질문 드립니다',
      name: '장정원',
      date: '2021-10-20T12:12:12',
    },
    {
      id: 0,
      type: 'q',
      title: '이런 꿀팁 몰랐을껄?',
      name: '장정원',
      date: '2021-10-20T12:12:12',
    },
    {
      id: 0,
      type: 'q',
      title: '이런 꿀팁 몰랐을껄?',
      name: '장정원',
      date: '2021-10-20T12:12:12',
    },
    {
      id: 0,
      type: 't',
      title: '팝아트에 대해 질문 드립니다',
      name: '장정원',
      date: '2021-10-20T12:12:12',
    },
    {
      id: 0,
      type: 'q',
      title: '팝아트',
      name: '장정원',
      date: '2021-10-20T12:12:12',
    },
  ];
  return (
    <S.Wrapper>
      <S.Phrases>팔로잉한 유저의 추천게시물</S.Phrases>
      <S.ItemContainer>
        {items.map(({ id, type, title, name, date }) => {
          return (
            <S.ItemBox key={id} backgroundColor={useSelectColor}>
              {type === 'q' ? <S.ItemImg src={questionIcon} /> : <S.ItemImg src={commonIcon} />}
              <S.ItemTitle>{title}</S.ItemTitle>
              <S.User>{name}님의 게시물</S.User>
              <S.Date>{dateTransform(date)}</S.Date>
            </S.ItemBox>
          );
        })}
      </S.ItemContainer>
      <S.AddBtn>더보기</S.AddBtn>
    </S.Wrapper>
  );
};

export default Recommendation;
