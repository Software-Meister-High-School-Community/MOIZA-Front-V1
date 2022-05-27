import React, { useState } from 'react';
import * as S from './style';
import Notice from './notice';
import CategoryDropdown from './category';
import headerLogo from '../../assets/img/MOIZALogo/englishHorizontalType.svg';
import searchIcon from '../../assets/img/common/searchIcon.svg';
import profileIcon from '../../assets/img/header/profileIcon.svg';
import noticeIcon from '../../assets/img/header/noticeIcon.svg';

const Header: React.FC = () => {
  const loginCheck = localStorage.getItem('Token');
  const [noticeState, setNoticeState] = useState<boolean>(false);

  const handleDisplay: any = () => {
    let isDisplay = 'none';
    noticeState ? (isDisplay = 'block') : (isDisplay = 'none');
    return isDisplay;
  };

  return (
    <>
      <S.Container>
        <S.StyleLink to="/">
          <S.LogoImg src={headerLogo} />
        </S.StyleLink>

        <S.StyleLink to="/category">
          <CategoryDropdown />
        </S.StyleLink>

        <S.ItemContainer>
          <S.StyleLink to="/search">
            <S.ItemImg src={searchIcon} color="#000" />
          </S.StyleLink>
          <S.ItemImg src={profileIcon} />

          <S.ItemImg src={noticeIcon} onClick={() => setNoticeState(!noticeState)} />
        </S.ItemContainer>

        <S.AuthContainer>
          {loginCheck ? (
            <S.AuthText>로그아웃</S.AuthText>
          ) : (
            <>
              <S.StyleLink to="/signup">
                <S.AuthText>회원가입</S.AuthText>
              </S.StyleLink>
              |
              <S.StyleLink to="/login">
                <S.AuthText>로그인</S.AuthText>
              </S.StyleLink>
            </>
          )}
        </S.AuthContainer>
      </S.Container>
      <Notice noticeState={noticeState} noticeClose={() => setNoticeState(false)} />
    </>
  );
};

export default Header;
