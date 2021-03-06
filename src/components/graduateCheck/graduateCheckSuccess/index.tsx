import { useNavigate } from 'react-router';
import Index from '../../common/button/submitButton';
import * as GCS from './style';
import Success from '../../../assets/img/graduateCheck/graduateSuccessIcon.svg';

const GraduateCheckSuccess = () => {
  const navigate = useNavigate();

  return (
    <GCS.GraduateCheckSuccessBox>
      <GCS.GraduateCheckSuccessTitleWrap>
        <GCS.GraduateCheckSuccessImg src={Success} />
        <GCS.GraduateCheckSuccessTitle>
          <strong>졸업 인증 신청</strong>이 완료되었습니다.
        </GCS.GraduateCheckSuccessTitle>
      </GCS.GraduateCheckSuccessTitleWrap>
      <GCS.GraduateCheckSuccessGuideText>
        빠른 시일 내 확인 후 승인하겠습니다.
        <br /> 조금만 기다려주세요.
      </GCS.GraduateCheckSuccessGuideText>
      <GCS.GraduateCheckSuccessFooterWrap>
        <Index big text="메인 화면으로" blue handleClick={() => navigate('/')} />
      </GCS.GraduateCheckSuccessFooterWrap>
    </GCS.GraduateCheckSuccessBox>
  );
};

export default GraduateCheckSuccess;
