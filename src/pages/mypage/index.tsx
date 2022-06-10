import ProfileComponent from '../../components/mypage';
import { useUserInfo } from '../../hooks/user/useUserInfo';

const MyPage = () => {
  const { userInfo } = useUserInfo();
  return <ProfileComponent profileContent={userInfo} />;
};
export default MyPage;
