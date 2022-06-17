import React, { useMemo, useState } from 'react';
import * as S from './styles';
import defaultProfile from '../../../assets/img/common/userDefaultIcon.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';
import SubmitButton from '../../common/button/submitButton';
import seeMore from '../../../assets/img/common/seeMoreBtnIcon.svg';
import SeeMoreModal from '../../common/seeMoreModal';
import { seeMoreOptionList } from '../constant';
import { useNavigate } from 'react-router';
import { TShowFollow } from '../../follow';
import { isValidUrl } from '../../../utils/function/isValidUrl';
import { startFollowing } from '../../../utils/api/follow';
import { IGetUserProfileResponse } from '../../../models/users/response';
import { Link } from 'react-router-dom';
import {translateSchool} from "../../../utils/function/translate/school";
import {translateUserScope} from "../../../utils/function/translate/user_scope";

interface PropsType {
  isMine: boolean;
  userInfo: IGetUserProfileResponse;
  userId: number;
}

const Profile: React.FC<PropsType> = ({ isMine, userInfo, userId }) => {
  const navigate = useNavigate();
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState(false);
  const openModal = () => {
    setSeeMoreModalStatus(true);
  };
  const closeModal = () => {
    setSeeMoreModalStatus(false);
  };
  const moveToFollowPage = (type: TShowFollow) => {
    navigate(`/profile/${userId}/${type}`);
  };
  const onClickFollow = () => {
    startFollowing(userId);
  };
  const profileLink = useMemo(() => {
    const link = isValidUrl(userInfo.profile_image_url);
    if (link === '') return defaultProfile;
    return link;
  }, [userInfo.profile_image_url]);
  const profileEditOrFollow = useMemo(() => {
    if (isMine)
      return (
        <Link to="/editProfile">
          <S.modifyProfile>프로필 편집</S.modifyProfile>
        </Link>
      );
    else
      return (
        <S.Follow>
          <SubmitButton
            big={false}
            text="팔로우"
            handleClick={onClickFollow}
            disable={false}
            yellow={false}
            blue={true}
          />
          <S.SeeMoreButton onClick={openModal}>
            <img src={seeMore} alt="이미지" />
            {seeMoreModalStatus && (
              <SeeMoreModal optionList={seeMoreOptionList} closeModal={closeModal} />
            )}
          </S.SeeMoreButton>
        </S.Follow>
      );
  }, [isMine]);
  return (
    <>
      <S.UserColorBox color={userInfo.profile_background_color} />
      <S.Wrapper>
        <img className="userProfile" src={profileLink} alt="프로필" />
        <S.UserInfo>
          <S.PersonInfo>
            <p className="name">{userInfo.name}</p>
            <p className="school userScope">{translateSchool(userInfo.school)} {translateUserScope(userInfo.user_scope)}</p>
          </S.PersonInfo>
          <S.ActiveInfo>
            게시물
            <S.Count>{userInfo.feed_count}</S.Count>
            <label onClick={() => moveToFollowPage('follower')}>
              팔로워
              <S.Count>{userInfo.follower_count}</S.Count>
            </label>
            <label onClick={() => moveToFollowPage('following')}>
              팔로잉
              <S.Count>{userInfo.following_count}</S.Count>
            </label>
          </S.ActiveInfo>
          <S.Introduce>{userInfo.introduce}</S.Introduce>
          <S.UserLinkList>
            {userInfo.link_url?.map((item, index) => (
              <li onClick={() => WindowOpenUtil(item)}>{item}</li>
            ))}
          </S.UserLinkList>
        </S.UserInfo>
        {profileEditOrFollow}
      </S.Wrapper>
    </>
  );
};
export default Profile;
