import React from 'react';
import * as S from './style';
import human1 from '../../assets/img/category/human1.svg';
import human2 from '../../assets/img/category/human2.svg';
import default1 from '../../assets/img/category/default1.svg';
import default2 from '../../assets/img/category/default2.svg';
import default3 from '../../assets/img/category/default3.svg';

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

        <S.Item>Front-End</S.Item>
        <S.Item>Back-End</S.Item>
        <S.Item>
          <S.ItemImg src={default1} alt="" />
        </S.Item>
        <S.Item>IOS</S.Item>
        <S.Item>Android</S.Item>
        <S.Item>Design</S.Item>
        <S.Item>Game</S.Item>
        <S.Item>
          <S.ItemImg src={default2} alt="" />
        </S.Item>
        <S.Item>Security</S.Item>
        <S.Item>Embedded</S.Item>
        <S.Item>AI</S.Item>
        <S.Item>
          <S.ItemImg src={default3} alt="" />
        </S.Item>
      </S.Container>
    </S.Wrapper>
  );
};

export default Category;
