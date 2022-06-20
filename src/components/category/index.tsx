import React from 'react';
import * as S from './style';
import human1 from '../../assets/img/category/human1.svg';
import human2 from '../../assets/img/category/human2.svg';
import { categoryList } from './constant';
import { Link } from 'react-router-dom';

const Category: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleBox>
          <S.Title>게시물 카테고리</S.Title>
          <S.Line />
        </S.TitleBox>

        <S.Img src={human1} alt="" top="180px" left="1200px" />
        <S.Img src={human2} alt="" top="375px" left="-20px" />
        {categoryList.map((item, index) => {
          if (index === 2 || index === 7 || index === 11)
            return (
              <Link to={`/category/${item.toUpperCase()}`}>
                <S.Item>
                  <S.ItemImg src={item} />
                </S.Item>
              </Link>
            );
          return (
            <Link to={`/category/${item.toUpperCase()}`}>
              <S.Item>{item}</S.Item>
            </Link>
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
};

export default Category;
