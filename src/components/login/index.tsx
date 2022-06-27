import React from 'react';
import useLogin from '../../hooks/login/useLogin';
import Index from '../common/button/submitButton';
import * as S from './style';
import LoginForm from './loginForm';

const Login: React.FC = () => {
  const { loginData, handleLoginData, submitLoginData, isCheckLoginSave, setIsCheckLoginSave } =
    useLogin();

  return (
    <S.LoginBox>
      <S.LoginTitle>로그인</S.LoginTitle>
      <LoginForm
        loginData={loginData}
        handleLoginData={handleLoginData}
        isCheckLoginSave={isCheckLoginSave}
        setIsCheckLoginSave={setIsCheckLoginSave}
      />
      <S.LoginSubmitButtonWrap>
        <Index big text={'로그인'} blue handleClick={submitLoginData} />
      </S.LoginSubmitButtonWrap>
    </S.LoginBox>
  );
};

export default Login;
