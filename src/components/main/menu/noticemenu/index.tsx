import React from 'react';
import * as S from './style';
import { noticePostCount } from '../constant';
import { Link } from 'react-router-dom';

const NoticeMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <div>
        <S.NoticeHead>
          <S.StarName width="120px" height="35px" margin="0 210px 21px 0">
            공지사항
          </S.StarName>
          <Link to="/notice">
            <S.MoreBtn>더보기</S.MoreBtn>
          </Link>
        </S.NoticeHead>
        <S.HR width="380px" height="3px" background="#FFE199" />
        <S.NoticeList>
          <S.NoticeDiv>
            <S.NoticeTextDiv>
              <S.NoticeText fixed={true}>ㅇㅁㄹㅇ</S.NoticeText>
              <S.NoticeDate>22/01/21 8:29</S.NoticeDate>
            </S.NoticeTextDiv>
          </S.NoticeDiv>
        </S.NoticeList>
      </div>
    </S.Wrapper>
  );
};

export default NoticeMenu;
