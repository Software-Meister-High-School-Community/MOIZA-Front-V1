import WithAuthorization from '../../hoc/withAuthorization';
import ProfileComponent from '../../components/mypage';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../../utils/api/users';
import { IGetUserProfileResponse } from '../../models/users/response';
import { TBackGroundColor, TSchool, TUser } from '../../models/common';

const ProfilePage = () => {
  const [profileContent, setProfileContent] = useState<IGetUserProfileResponse>({
    name: '다른유저',
    school: 'DSM',
    user_scope: 'GRADUATE',
    profile_image_url: '',
    profile_background_color: '#FFB500',
    introduce: '안녕',
    link_url: null,
    feed_count: 0,
    follower_count: 0,
    following_count: 0,
  });
  const { userId } = useParams();
  const id = Number(userId);
  const navigate = useNavigate();
  useEffect(() => {
    if (isNaN(id)) navigate('/404');
    getUserProfile(id)
      .then(res => setProfileContent(res))
      .catch(err => {
        console.log(err);
        // todo
        // 에러코드가 404일 경우 404페이지로 이동시킬예정
      });
  }, [id]);
  if (id) return <ProfileComponent profileContent={profileContent} id={id} />;
  return <></>;
};
// export default WithAuthorization(MyPage);
export default ProfilePage;
