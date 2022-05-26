import { useCallback, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { registerSchoolSelect, signUpFormData } from '../../store/Signup/registerInfoAtom';
import { signupPart } from '../../store/signup/signupPartAtom';
import { schoolEmailTransform } from '../../utils/function/schoolEmailTransform';
import { signupFormDataNullcheck } from '../../utils/data/signupDataNullCheck';

const useSignupInfo = () => {
  const setPart = useSetRecoilState(signupPart);
  const schoolSelect = useRecoilValue(registerSchoolSelect);
  const [sexSelect, setSexSelect] = useState('남성');
  const [studentStatus, setStudentStatus] = useState('재학생');
  const [userInfo, setUserInfo] = useRecoilState(signUpFormData);
  const [sendCertificationNumber, setSendCertificationNumber] = useState(false);
  const [notCheckCertificationNumber, setNotCheckCertificationNumber] = useState(true);

  const isInfoNull = useMemo(() => signupFormDataNullcheck(userInfo), [userInfo]);

  const isInfoComplete = useMemo(() => {
    return isInfoNull || notCheckCertificationNumber;
  }, [isInfoNull, notCheckCertificationNumber]);

  const setFullEmail = useCallback((): void => {
    setUserInfo({
      ...userInfo,
      email: userInfo.email + schoolEmailTransform(userInfo.schoolSelect),
    });
  }, [userInfo.schoolSelect, setUserInfo, userInfo.email]);

  const handleInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    },
    [setUserInfo],
  );

  const onSendCertificationNumber = () => {
    console.log(userInfo.email + schoolEmailTransform(schoolSelect));
    setSendCertificationNumber(true);
  };

  const checkCertification = () => {
    setNotCheckCertificationNumber(false);
  };

  const goToSetPw = () => {
    if (studentStatus !== '졸업생') {
      setFullEmail();
    }
    setPart('아이디 / 비밀번호');
    console.log(userInfo);
  };

  return {
    sexSelect,
    setSexSelect,
    studentStatus,
    setStudentStatus,
    sendCertificationNumber,
    setSendCertificationNumber,
    notCheckCertificationNumber,
    isInfoComplete,
    handleInfo,
    onSendCertificationNumber,
    checkCertification,
    goToSetPw,
  };
};

export default useSignupInfo;
