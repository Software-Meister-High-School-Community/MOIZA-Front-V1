import WithAuthorization from '../../hoc/withAuthorization';
import ProfileComponent from '../../components/mypage';
import { useNavigate, useParams } from 'react-router';

const ProfilePage = () => {
  const { userId } = useParams();
  const id = Number(userId);
  const navigate = useNavigate();
  if (isNaN(id)) navigate('/404');
  return <ProfileComponent id={id} />;
};
// export default WithAuthorization(MyPage);
export default ProfilePage;
