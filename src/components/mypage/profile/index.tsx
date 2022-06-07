import React, { useCallback, useMemo, useState } from 'react';
import * as S from './styles';
import defaultProfile from '../../../assets/img/common/userDefaultIcon.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';
import SubmitButton from '../../common/button/submitButton';
import seeMore from '../../../assets/img/common/seeMoreBtnIcon.svg';
import SeeMoreModal from '../../common/seeMoreModal';
import { seeMoreOptionList } from '../constant';
import { useUserInfo } from '../../../hooks/user/useUserInfo';
import { useNavigate } from 'react-router';
import { TShowFollow } from '../../follow';
import { isValidUrl } from '../../../utils/function/isValidUrl';

interface PropsType {
  isMine: boolean;
  id: number;
}

const Profile: React.FC<PropsType> = ({ isMine, id }) => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState(false);
  const profileLink = useMemo(() => {
    const link = isValidUrl(userInfo.profile_image_url);
    if (link === '') return defaultProfile;
    return link;
  }, [userInfo.profile_image_url]);
  const moveToFollowPage = (type: TShowFollow) => {
    navigate(`/profile/${id}/${type}`);
  };
  return (
    <>
      <S.UserColorBox color={userInfo.profile_background_color} />
      <S.Wrapper>
        <img className="userProfile" src={profileLink} alt="프로필" />
        <S.UserInfo>
          <S.PersonInfo>
            <p className="name">{userInfo.name}</p>
            <p className="school">{userInfo.school}</p>
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
        {isMine ? (
          <S.modifyProfile>프로필 편집</S.modifyProfile>
        ) : (
          <S.Follow>
            <SubmitButton
              big={false}
              text="팔로우"
              handleClick={() => console.log('asd')}
              disable={false}
              yellow={false}
              blue={true}
            />
            <S.SeeMoreBtn onClick={() => setSeeMoreModalStatus(true)}>
              <img src={seeMore} alt="이미지" />
              {seeMoreModalStatus && (
                <SeeMoreModal
                  optionList={seeMoreOptionList}
                  setModalStatus={setSeeMoreModalStatus}
                />
              )}
            </S.SeeMoreBtn>
          </S.Follow>
        )}
      </S.Wrapper>
    </>
  );
};
export default Profile;
