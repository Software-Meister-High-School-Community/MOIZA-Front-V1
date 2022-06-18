import * as S from './style';
import DaeguImg from '../../../assets/img/banner/대구.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';

const Daegu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${DaeguImg})` }}>
        <S.SchoolName width="385px" height="35px" margin="60px 238px 8px 60px">
          대구 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText width="430px" height="16px" margin="0 221px 50px 60px">
          더 나은 세상을 만들어 갈 sw인재가 모이는 대구소프트웨어고등학교
        </S.SchoolText>
        <S.Hr margin="0 0 16px 60px" />
        <S.SchoolClass1 width="128px" height="20px" margin="0 454px 10px 60px">
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2 width="160px" height="20px" margin="0 454px 10px 60px">
          임베디드소프트웨어과
        </S.SchoolClass2>
        <S.SchoolClass3 width="180px" height="20px" margin="0 454px 65px 60px">
          인공지능 소프트웨어과
        </S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => WindowOpenUtil('http://www.dgsw.hs.kr/index.do')}
          width="140px"
          margin="0 478px 0 60px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Daegu;
