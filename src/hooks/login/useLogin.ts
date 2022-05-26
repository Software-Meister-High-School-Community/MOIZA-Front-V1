import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../utils/api/auth';
import { ILoginProps } from '../../utils/interface/Login';
import { ILoginRequest } from '../../models/auth/request';

const useLogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<ILoginRequest>({
    account_id: '',
    password: '',
    app_device_token: null,
    web_device_token: '',
  });

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData(prev => ({ ...prev, [name]: value }));
    },
    [setLoginData],
  );

  const submitLoginData = useCallback(async () => {
    console.log(loginData);

    if (loginData.account_id === '' || loginData.password === '') {
      return;
    }
    try {
      const data = await login(loginData).then(res => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
      });
      window.alert('로그인 성공');
      navigate('/');
    } catch (error) {
      window.alert('로그인 실패');
    }
  }, [navigate, loginData]);

  return {
    loginData,
    handleLoginData,
    submitLoginData,
  };
};

export default useLogin;
