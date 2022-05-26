import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { signUpFormData, signUpIdPwFormData } from '../../store/signup/registerInfoAtom';
import { signupPart } from '../../store/Signup/signupPartAtom';

const useSignupIdPw = () => {
  const setPart = useSetRecoilState(signupPart);
  const [authData, setAuthData] = useRecoilState(signUpIdPwFormData);
  const resetAuth = useResetRecoilState(signUpIdPwFormData);
  const userInfo = useRecoilValue(signUpFormData);
  const resetInfo = useResetRecoilState(signUpFormData);
  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  const navigate = useNavigate();

  const handleIdPw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setAuthData({ ...authData, [name]: value });
    },
    [setAuthData],
  );

  const goToLogin = () => {
    console.log(userInfo);
    console.log(authData);
    setPart('약관동의');
    resetInfo();
    resetAuth();
    if (userInfo.studentStatus === '졸업생') {
      navigate('/graduatecheck');
      return;
    }
    navigate('/signupsuccess');
  };

  return {
    isPwShow,
    setIsPwShow,
    isCheckPwShow,
    setIsCheckPwShow,
    handleIdPw,
    goToLogin,
  };
};

export default useSignupIdPw;
