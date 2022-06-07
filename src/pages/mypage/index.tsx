import ProfileComponent from '../../components/mypage';
import { useUserInfo } from '../../hooks/user/useUserInfo';
import { useNavigate } from 'react-router';

const MyPage = () => {
  const { userInfo } = useUserInfo();
  const id = Number(userInfo.user_id);
  const navigate = useNavigate();
  if (isNaN(id)) navigate('/404');
  return <ProfileComponent id={id} />;
};
export default Mypage;
