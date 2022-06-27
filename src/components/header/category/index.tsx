import React from 'react';
import * as S from './style';
import categoryIcon from '../../../assets/img/category/categoryIcon.svg';
import { Link } from 'react-router-dom';

const categoryList = [
  'Front-End',
  'Back-End',
  'iOS',
  'Android',
  'Design',
  'Game',
  'Security',
  'Embedded',
  'AI',
];

const CategoryDropdown: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Img src={categoryIcon} />
        <S.Title>카테고리</S.Title>
      </S.Container>

      <S.ItemContainer>
        {categoryList.map(item => (
          <Link to={`/category/${item.toUpperCase()}`}>
            <S.Item>{item}</S.Item>
          </Link>
        ))}
      </S.ItemContainer>

      <S.Line />
    </S.Wrapper>
  );
};

export default CategoryDropdown;
