import React from 'react';
import StarMenu from '../starmenu/StarMenu';
import NoticeMenu from '../noticemenu';
import * as S from './style';
import Footer from '../../../footer';

const MainMenu: React.FC = () => {
  return (
    <>
      <S.MenuWrapper>
        <S.MenuDiv>
          <S.StarMenuDiv>
            <StarMenu />
          </S.StarMenuDiv>
          <S.NoticeMenuDiv>
            <NoticeMenu />
          </S.NoticeMenuDiv>
        </S.MenuDiv>
        <Footer />
      </S.MenuWrapper>
    </>
  );
};

export default MainMenu;
