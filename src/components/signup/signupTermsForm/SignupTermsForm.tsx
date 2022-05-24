import React from 'react';
import SubmitButton from '../../common/button/SubmitButton/SubmitButton';
import { SignupFooterWrap, SignupFormsWrap } from '../style';
import * as S from './style';

interface ISignupTermsFormProps {
  goToInfo: () => void;
}

const SignupTermsForm: React.FC<ISignupTermsFormProps> = ({ goToInfo }) => {
  return (
    <SignupFormsWrap>
      <S.SignupTermsFormBox>
        <S.SignupTermsFormTitle>무슨 동의</S.SignupTermsFormTitle>
        <S.SignupTermsFormTextWrap></S.SignupTermsFormTextWrap>
      </S.SignupTermsFormBox>
      <SignupFooterWrap>
        <SubmitButton text={'다음 단계'} blue big name="정보입력" handleClick={goToInfo} />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};

export default SignupTermsForm;
