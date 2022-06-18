import React from 'react';
import * as S from './style';
import BusanImg from '../../../assets/img/banner/부산.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';

const Busan: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${BusanImg})` }}>
        <S.SchoolName width="385px" height="35px" margin="60px 0 8px 60px">
          부산 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText width="278px" height="22px" margin="0 0 50px 60px">
          꿈을 향한 도전, 미래를 여는 학교
        </S.SchoolText>
        <S.Hr margin="0 0 16px 60px" />
        <S.SchoolClass1 width="160px" height="20px" margin="0 0 13px 60px">
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2 width="160px" height="20px" margin="0 0 97px 60px">
          임베디드소프트웨어과
        </S.SchoolClass2>
        <S.SchoolHomePage
          onClick={() => WindowOpenUtil('http://bssm.hs.kr/')}
          width="140px"
          margin="0 0 0 60px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Busan;
