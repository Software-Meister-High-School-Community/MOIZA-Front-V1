import { Dispatch, SetStateAction } from 'react';
import * as S from '../style';
import * as FIC from './style';

interface IFindIdCertificationProps {
  certificationNumber: string;
  setCertificationNumber: Dispatch<SetStateAction<string>>;
}

const FindIdCertification: React.FC<IFindIdCertificationProps> = ({
  certificationNumber,
  setCertificationNumber,
}) => {
  return (
    <>
      <FIC.FindIdCertificationBox>
        <FIC.FindIdCertificationTitle>인증번호 입력</FIC.FindIdCertificationTitle>
        <FIC.FindIdCertificationInputWrap>
          <S.FindIdFormTextInput
            isWrite={certificationNumber !== ''}
            onChange={e => setCertificationNumber(e.target.value)}
            placeholder="인증번호를 입력해주세요."
          />
          <S.FindIdFormCertificationButton
            isWrite={certificationNumber !== ''}
            disabled={certificationNumber === ''}
          >
            인증메일 재발송
          </S.FindIdFormCertificationButton>
        </FIC.FindIdCertificationInputWrap>
      </FIC.FindIdCertificationBox>
    </>
  );
};

export default FindIdCertification;
