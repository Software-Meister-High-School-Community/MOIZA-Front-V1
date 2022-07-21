import React, { useEffect } from 'react';
import * as S from './style';
import { useSelectColor } from '../../hooks/recommendation/useSelectColor';
import { dateTransform } from '../../utils/function/dateTransform';
import questionIcon from '../../assets/img/recommendation/questionIcon.svg';
import commonIcon from '../../assets/img/recommendation/commonIcon.svg';
import { IGetSuggestionFeedListResponse } from '../../models/feeds/response';
import { Link } from 'react-router-dom';
const Recommendation = () => {
  const items: IGetSuggestionFeedListResponse = {
    feed_list: [
      {
        id: 0,
        title: '팝아트에 대해서 질문 드립니다',
        type: 'QUESTION',
        author_name: '장정원',
        created_at: '2021-10-20T12:12:12',
      },
      {
        id: 0,
        type: 'COMMON',
        title: '팝아트에 대해서 질문 드립니다',
        author_name: '장정원',
        created_at: '2021-10-20T12:12:12',
      },
      {
        id: 0,
        type: 'ALL',
        title: '이런 꿀팁 몰랐을껄?',
        author_name: '장정원',
        created_at: '2021-10-20T12:12:12',
      },
      {
        id: 0,
        type: 'COMMON',
        title: '이런 꿀팁 몰랐을껄?',
        author_name: '장정원',
        created_at: '2021-10-20T12:12:12',
      },
      {
        id: 0,
        type: 'QUESTION',
        title: '팝아트에 대해 질문 드립니다',
        author_name: '장정원',
        created_at: '2021-10-20T12:12:12',
      },
      {
        id: 0,
        type: 'QUESTION',
        title: '팝아트',
        author_name: '장정원',
        created_at: '2021-10-20T12:12:12',
      },
    ],
  };
  return (
    <S.Wrapper>
      <S.Phrases>팔로잉한 유저의 추천게시물</S.Phrases>
      <S.ItemContainer>
        {items.feed_list.map(({ id, type, title, author_name, created_at }) => {
          return (
            <Link to={`/`}>
              <S.ItemBox key={id} backgroundColor={useSelectColor}>
                {type === 'QUESTION' ? (
                  <S.ItemImg src={questionIcon} />
                ) : (
                  <S.ItemImg src={commonIcon} />
                )}
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.User>{author_name}님의 게시물</S.User>
                <S.Date>{dateTransform(created_at)}</S.Date>
              </S.ItemBox>
            </Link>
          );
        })}
      </S.ItemContainer>
      <S.AddBtn>더보기</S.AddBtn>
    </S.Wrapper>
  );
};

export default Recommendation;
