import * as S from './style';
import GwangjuImg from '../../../assets/img/banner/광주.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';

const Gwangju: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${GwangjuImg})` }}>
        <S.SchoolName width="385px" height="35px" margin="60px 0 8px 238px">
          광주 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText width="340px" height="16px" margin="0 0 50px 280px">
          창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성
        </S.SchoolText>
        <S.Hr margin="0 0 16px 478px" />
        <S.SchoolClass1 width="128px" height="20px" margin="0 70px 13px 481px">
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2 width="89px" height="20px" margin="0 68px 105px 521px">
          스마트IOT과
        </S.SchoolClass2>
        <S.SchoolHomePage
          onClick={() => WindowOpenUtil('http://gsm.gen.hs.kr/main/main.php')}
          width="140px"
          margin="0 0 0 478px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Gwangju;
