import React, { Component, useEffect } from 'react';
import { TUser } from '../models/common';
import { useUserInfo } from '../hooks/user/useUserInfo';
import { useNavigate } from 'react-router-dom';
import Comment from '../components/admin/manageReport/reports/comment';

const AllAccessAuthorization: TUser[] = ['STUDENT', 'USER', 'ADMIN', 'GRADUATE'];

function WithAuthorization<T>(
  component: React.ComponentType<T>,
  accessedUserScope: TUser[] = AllAccessAuthorization,
) {
  const CheckingAuthorization = (props: T) => {
    const { userInfo } = useUserInfo();
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem('access_token') || !localStorage.getItem('refresh_token')) {
        window.alert('로그인을 해주세요.');
        navigate('/login');
      } else if (!accessedUserScope.includes(userInfo.user_scope)) {
        window.alert('접근 권한이 없습니다.');
        navigate(-1);
      }
    }, []);
    return <Comment {...props} />;
  };
  return CheckingAuthorization;
}
export default WithAuthorization;
