import WithAuthorization from '../../hoc/withAuthorization';
import ProfileComponent from '../../components/mypage';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';

const ProfilePage = () => {
  const { userId } = useParams();
  const id = Number(userId);
  const navigate = useNavigate();
  useEffect(() => {
    if (isNaN(id)) navigate('/404');
  }, [id]);
  if (id) return <ProfileComponent id={id} />;
  return <></>;
};
// export default WithAuthorization(MyPage);
export default ProfilePage;
