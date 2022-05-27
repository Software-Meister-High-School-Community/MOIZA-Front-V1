import { Dispatch, SetStateAction } from 'react';
import * as FPF from '../style';
import * as S from './style';

interface IFindPwCertificationProps {
  certificationNumber: string;
  setCertificationNumber: Dispatch<SetStateAction<string>>;
}

const FindPwCertification: React.FC<IFindPwCertificationProps> = ({
  certificationNumber,
  setCertificationNumber,
}) => {
  return (
    <S.FindPwCertificationBox>
      <S.FindPwCertificationTitle>인증번호 입력</S.FindPwCertificationTitle>
      <S.FindPwCertificationInputWrap>
        <FPF.FindPwFormTextInput
          isWrite={certificationNumber !== ''}
          placeholder="인증번호를 입력해주세요."
          onChange={e => setCertificationNumber(e.target.value)}
          value={certificationNumber}
        />
        <FPF.FindPwFormCertificationButton
          isWrite={certificationNumber !== ''}
          disabled={certificationNumber === ''}
        >
          인증메일 재발송
        </FPF.FindPwFormCertificationButton>
      </S.FindPwCertificationInputWrap>
    </S.FindPwCertificationBox>
  );
};

export default FindPwCertification;
