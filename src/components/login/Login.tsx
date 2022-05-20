import React from 'react';
import useLogin from '../../hooks/login/useLogin';
import SubmitButton from '../common/Button/SubmitButton/SubmitButton';
import * as S from './style';
import LoginForm from './LoginForm/LoginForm';

const Login: React.FC = () => {
  const { loginData, handleLoginData, submitLoginData } = useLogin();

  return (
    <S.LoginBox>
      <S.LoginTitle>로그인</S.LoginTitle>
      <LoginForm loginData={loginData} handleLoginData={handleLoginData} />
      <S.LoginSubmitButtonWrap>
        <SubmitButton big text={'로그인'} blue handleClick={submitLoginData} />
      </S.LoginSubmitButtonWrap>
    </S.LoginBox>
  );
};

export default Login;
