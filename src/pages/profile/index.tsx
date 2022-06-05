import WithAuthorization from '../../hoc/withAuthorization';
import ProfileComponent from '../../components/mypage';
import { useParams } from 'react-router';

const ProfilePage = () => {
  const { userId } = useParams();
  const id = Number(userId);
  if (id) return <ProfileComponent id={id} />;
  return <></>;
};
// export default WithAuthorization(MyPage);
export default ProfilePage;
