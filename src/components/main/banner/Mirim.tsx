import * as S from './style';
import MirimImg from '../../../assets/img/banner/미림.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';

const Mirim: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${MirimImg})` }}>
        <S.SchoolName width="225px" height="35px" margin="60px 0 8px 60px">
          미림 마이스터고
        </S.SchoolName>
        <S.SchoolText width="430px" height="22px" margin="0 0 50px 60px">
          IT 시대의 꿈과 희망이 있는 곳. 미림에서 열어갑니다.
        </S.SchoolText>
        <S.Hr margin="0 0 16px 60px" />
        <S.SchoolClass1 width="160px" height="20px" margin="0 0 13px 60px">
          뉴미디어소프트웨어과
        </S.SchoolClass1>
        <S.SchoolClass2 width="160px" height="20px" margin="0 0 13px 60px">
          뉴미디어웹솔루션과
        </S.SchoolClass2>
        <S.SchoolClass3 width="180px" height="20px" margin="0 0 65px 60px">
          뉴미디어디자인과
        </S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => WindowOpenUtil('https://www.e-mirim.hs.kr/main.do')}
          width="140px"
          margin="0 0 0 60px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Mirim;
