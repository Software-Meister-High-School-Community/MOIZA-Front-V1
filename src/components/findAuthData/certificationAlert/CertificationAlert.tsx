import * as S from './style';
import { sendCertificationNumberStatus } from '../../../store/FindAuthData/certificationStatus';
import { useRecoilState } from 'recoil';
import CertificationSend from '../../../assets/img/findAuthData/certificationIcon.svg';

const CertificationAlert: React.FC = () => {
  const [isSendNumber, setIsSendNumber] = useRecoilState(sendCertificationNumberStatus);

  return (
    <S.CertificationAlertBox isPwSend={isSendNumber.findPwSendNumber}>
      <S.CertificationAlertImg src={CertificationSend} />
      <S.CertificationAlertText>
        <strong>인증메일</strong>이 발송되었습니다.
      </S.CertificationAlertText>
      {isSendNumber.findPwSendNumber && (
        <S.CertificationPwGuideText>
          회원가입 시 입력하신 이메일 <br />
          <strong>d2116@e-mirim.hs.kr</strong> 로 인증번호가 전송되었습니다.
        </S.CertificationPwGuideText>
      )}
    </S.CertificationAlertBox>
  );
};

export default CertificationAlert;
