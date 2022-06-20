import React, { ChangeEvent, useMemo, useState } from 'react';
import * as S from './style';
import { SignupFooterWrap, SignupFormsWrap } from '../style';
import Index from '../../common/button/submitButton';
import { signupIdPwFormDataNullCheck } from '../../../utils/data/signupDataNullCheck';
import TextInput from '../../common/Input/TextInput';
import useSignupInfo from '../../../hooks/signup/useSignupInfo';
import { checkIdOverWrap } from '../../../utils/api/auth';

const SignupIdPwForm: React.FC = () => {
  const { userInfo, onChangeInputValue, goToLogin } = useSignupInfo();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');
  const [useAbleAccountId, setUseAbleAccountId] = useState(false);
  const isNull = useMemo(
    () =>
      !signupIdPwFormDataNullCheck({
        account_id: userInfo.account_id,
        password: userInfo.password,
        checkPassword,
      }) &&
      userInfo.password == checkPassword &&
      useAbleAccountId,
    [userInfo, checkPassword, useAbleAccountId],
  );
  const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };
  const onClickOverWrapId = () => {
    checkIdOverWrap(userInfo.account_id).then(() => setUseAbleAccountId(true));
  };
  return (
    <SignupFormsWrap>
      <S.SignupIdPwFormBox>
        <S.SignupIdPwTitle>아이디</S.SignupIdPwTitle>
        <div style={{ display: 'flex', marginBottom: 72 }}>
          <TextInput
            width="340"
            name="account_id"
            type="text"
            value={userInfo.account_id}
            setValue={onChangeInputValue}
          />
          <S.SignupIdPwDoubleCheckButton
            enabled={userInfo.account_id !== ''}
            disabled={userInfo.account_id === ''}
            onClick={onClickOverWrapId}
          >
            아이디 중복확인
          </S.SignupIdPwDoubleCheckButton>
        </div>
        <S.SignupIdPwTitle>비밀번호</S.SignupIdPwTitle>
        <TextInput
          width="340"
          type="password"
          name="password"
          value={userInfo.password}
          setValue={onChangeInputValue}
          isShow={isVisiblePassword}
          onClick={setIsVisiblePassword}
        />
        <S.SignupIdPwGuideText style={{ marginBottom: 72 }}>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </S.SignupIdPwGuideText>
        <S.SignupIdPwTitle>비밀번호 확인</S.SignupIdPwTitle>
        <TextInput
          width="340"
          type="password"
          name="checkPw"
          value={checkPassword}
          setValue={onChangeCheckPassword}
          isShow={isVisiblePassword}
          onClick={setIsVisiblePassword}
        />
      </S.SignupIdPwFormBox>
      <SignupFooterWrap>
        <Index text={'다음 단계'} blue big disable={!isNull} handleClick={goToLogin} />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};
export default React.memo(SignupIdPwForm);
