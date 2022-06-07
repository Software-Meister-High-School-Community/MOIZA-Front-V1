import ProfileComponent from '../../components/mypage';
import { useUserInfo } from '../../hooks/user/useUserInfo';

const Mypage = () => {
  const { userInfo } = useUserInfo();
  const id = Number(userInfo.user_id);
  if (id) return <ProfileComponent id={id} />;
  return <></>;
};
export default Mypage;
