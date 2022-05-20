import React from 'react';
import * as S from './style';
import categoryIcon from '../../../assets/img/category/categoryIcon.svg';

const CategoryDropdown: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img src={categoryIcon} />
        <S.Title>카테고리</S.Title>
      </S.Container>

      <S.ItemContainer>
        <S.Item>Front-End</S.Item>
        <S.Item>Back-End</S.Item>
        <S.Item>IOS</S.Item>
        <S.Item>Android</S.Item>
        <S.Item>Deign</S.Item>
        <S.Item>Game</S.Item>
        <S.Item>Security</S.Item>
        <S.Item>Embedded</S.Item>
        <S.Item>AI</S.Item>
      </S.ItemContainer>

      <S.Line />
    </S.Wrapper>
  );
};

export default CategoryDropdown;
