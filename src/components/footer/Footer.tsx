import React from 'react';
import footerLogo from '../../assets/img/MOIZALogo/koreanHorizontalTypeWhite.svg';
import * as S from './style';

const Footer = () => {
  return (
    <S.Container>
      <S.ItemContainer>
        <S.LogoItem src={footerLogo} />
        <S.TextItem>이용약관&nbsp;&nbsp; | &nbsp;&nbsp;개인정보처리방침</S.TextItem>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.TextItem>©2022. 팀이름. All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;</S.TextItem>
        <S.TextItem>sofmoiza@gmail.com</S.TextItem>
      </S.ItemContainer>
    </S.Container>
  );
};

export default Footer;
