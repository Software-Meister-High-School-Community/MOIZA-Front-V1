import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../utils/api/auth';
import { ILoginProps } from '../../utils/interface/Login';
import { ILoginRequest } from '../../models/auth/request';
import { useUserInfo } from '../user/useUserInfo';
import { userInfo } from 'os';
import { getMyPage } from '../../utils/api/users';

const useLogin = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUserInfo();
  const [loginData, setLoginData] = useState<ILoginRequest>({
    account_id: '',
    password: '',
    app_device_token: null,
    web_device_token: '',
  });
  const [isCheckLoginSave, setIsCheckLoginSave] = useState<boolean>(false);
  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData(prev => ({ ...prev, [name]: value }));
    },
    [setLoginData],
  );
  const submitLoginData = useCallback(async () => {
    if (loginData.account_id === '' || loginData.password === '') {
      return;
    }
    try {
      await login(loginData).then(res => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        if (isCheckLoginSave) localStorage.setItem('auto_login', 'true');
      });
      await getMyPage().then(res => setUserInfo(res));
      window.alert('로그인 성공');
      navigate('/');
    } catch (error) {
      window.alert('로그인 실패');
    }
  }, [navigate, loginData]);

  return {
    isCheckLoginSave,
    setIsCheckLoginSave,
    loginData,
    handleLoginData,
    submitLoginData,
  };
};

export default useLogin;
