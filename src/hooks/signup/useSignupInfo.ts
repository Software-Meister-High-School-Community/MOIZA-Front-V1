import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { registerSchoolSelect, signUpFormData } from '../../store/signup/registerInfoAtom';
import { signupPart } from '../../store/signup/signupPartAtom';
import { schoolEmailTransform } from '../../utils/function/schoolEmailTransform';
import { signupFormDataNullcheck } from '../../utils/data/signupDataNullCheck';
import { TSchool, TSex, TUser } from '../../models/common';
import { checkEmailAuthCode, postEmailAuthCode } from '../../utils/api/auth';
import { useNavigate } from 'react-router';

const useSignupInfo = () => {
  const navigation = useNavigate();
  const setPart = useSetRecoilState(signupPart);
  const [userInfo, setUserInfo] = useRecoilState(signUpFormData);
  const [verifyCode, setVerifyCode] = useState('');
  const [certification, setCertification] = useState({
    send: false,
    check: false,
  });
  const goToLogin = () => {
    if (userInfo.user_type === 'GRADUATE') {
      navigation('/graduatecheck');
    } else {
      navigation('/signupsuccess');
    }
  };
  const setFullEmail = useCallback((): void => {
    setUserInfo({
      ...userInfo,
      email: userInfo.email + schoolEmailTransform(userInfo.school),
    });
  }, [userInfo.school, setUserInfo, userInfo.email]);

  const onSendCertificationNumber = () => {
    postEmailAuthCode({
      type: 'SIGN_UP',
      value: userInfo.email + schoolEmailTransform(userInfo.school),
    });
    setCertification({ ...certification, send: true });
  };
  const onChangeVerifyCode = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyCode(e.target.value);
  };

  const checkCertification = () => {
    checkEmailAuthCode({
      email: userInfo.email + schoolEmailTransform(userInfo.school),
      auth_code: verifyCode,
      type: 'SIGN_UP',
    }).then(() => setCertification({ ...certification, check: true }));
  };
  const goToSetPw = () => {
    if (userInfo.user_type !== 'GRADUATE') {
      setFullEmail();
    }
    setPart('아이디 / 비밀번호');
  };
  const onChangeUserType = (type: string) => {
    const user_type = type as TUser;
    setUserInfo({
      ...userInfo,
      user_type,
    });
  };
  const onChangeSexType = (type: string) => {
    const sex = type as TSex;
    setUserInfo({
      ...userInfo,
      sex,
    });
  };
  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeSchoolType = (type: string) => {
    const school = type as TSchool;
    setUserInfo({
      ...userInfo,
      school,
    });
  };
  return {
    userInfo,
    onChangeSchoolType,
    onChangeInputValue,
    onChangeSexType,
    onChangeUserType,
    certification,
    onSendCertificationNumber,
    checkCertification,
    goToSetPw,
    verifyCode,
    onChangeVerifyCode,
    goToLogin,
  };
};

export default useSignupInfo;
