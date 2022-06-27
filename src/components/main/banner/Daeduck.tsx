import * as S from './style';
import DaeduckImg from '../../../assets/img/banner/대덕.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';

const Daeduck: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${DaeduckImg})` }}>
        <S.SchoolName width="385px" height="35px" margin="60px 238px 8px 60px">
          대덕 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText width="310px" height="22px" margin="0 0 50px 60px">
          창의성과 인간미를 품은 소프트웨어 영재의 육성
        </S.SchoolText>
        <S.Hr margin="0 0 16px 60px" />
        <S.SchoolClass1 width="128px" height="20px" margin="0 0 13px 60px">
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2 width="160px" height="20px" margin="0 0 13px 60px">
          임베디드소프트웨어과
        </S.SchoolClass2>
        <S.SchoolClass3 width="180px" height="20px" margin="0 0 65px 60px">
          정보보안과
        </S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => WindowOpenUtil('https://dsmhs.djsch.kr/main.do')}
          width="140px"
          margin="0 0 0 60px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Daeduck;
