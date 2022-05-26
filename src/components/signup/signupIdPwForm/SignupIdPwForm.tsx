import React, { useMemo } from 'react';
import * as S from './style';
import { SignupFooterWrap, SignupFormsWrap } from '../style';
import SubmitButton from '../../common/button/SubmitButton/SubmitButton';
import { useRecoilValue } from 'recoil';
import { signUpIdPwFormData } from '../../../store/signup/registerInfoAtom';
import { signupIdPwFormDataNullCheck } from '../../../utils/data/signupDataNullCheck';

import useSignupIdPw from '../../../hooks/signup/useSignupIdPw';
import TextInput from '../../common/Input/TextInput/TextInput';

const SignupIdPwForm: React.FC = () => {
  const { isPwShow, setIsPwShow, isCheckPwShow, setIsCheckPwShow, handleIdPw, goToLogin } =
    useSignupIdPw();

  const authData = useRecoilValue(signUpIdPwFormData);

  const isNull = useMemo(() => signupIdPwFormDataNullCheck(authData), [authData]);

  return (
    <SignupFormsWrap>
      <S.SignupIdPwFormBox>
        <S.SignupIdPwTitle>아이디</S.SignupIdPwTitle>
        <div style={{ display: 'flex', marginBottom: 72 }}>
          <TextInput width="340" name="id" type="text" value={authData.id} setValue={handleIdPw} />
          <S.SignupIdPwDoubleCheckButton enabled={authData.id !== ''} disabled={authData.id === ''}>
            아이디 중복확인
          </S.SignupIdPwDoubleCheckButton>
        </div>
        <S.SignupIdPwTitle>비밀번호</S.SignupIdPwTitle>
        <TextInput
          width="340"
          type="password"
          name="pw"
          value={authData.pw}
          setValue={handleIdPw}
          isShow={isPwShow}
          onClick={setIsPwShow}
        />
        <S.SignupIdPwGuideText style={{ marginBottom: 72 }}>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </S.SignupIdPwGuideText>
        <S.SignupIdPwTitle>비밀번호 확인</S.SignupIdPwTitle>
        <TextInput
          width="340"
          type="password"
          name="checkPw"
          value={authData.checkPw}
          setValue={handleIdPw}
          isShow={isCheckPwShow}
          onClick={setIsCheckPwShow}
        />
      </S.SignupIdPwFormBox>
      <SignupFooterWrap>
        <SubmitButton text={'다음 단계'} blue big disable={isNull} handleClick={goToLogin} />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};
export default React.memo(SignupIdPwForm);
