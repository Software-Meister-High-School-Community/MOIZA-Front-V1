import React, { useState } from 'react';
import * as S from './styles';
import defaultProfile from '../../../assets/img/common/userDefaultIcon.svg';
import { WindowOpenUtil } from '../../../utils/function/openWindow';
import SubmitButton from '../../common/button/submitButton';
import seeMore from '../../../assets/img/common/seeMoreBtnIcon.svg';
import SeeMoreModal from '../../common/seeMoreModal';
import { seeMoreOptionList } from '../constant';
import { useUserInfo } from '../../../hooks/user/useUserInfo';

interface PropsType {
  isMine: boolean;
}

const Profile: React.FC<PropsType> = ({ isMine }) => {
  const { userInfo } = useUserInfo();
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState(false);
  return (
    <S.Wrapper>
      <img
        className="userProfile"
        src={userInfo.profile_image_url || defaultProfile}
        alt="프로필"
      />
      <S.UserInfo>
        <S.PersonInfo>
          <p className="name">{userInfo.name}</p>
          <p className="school">{userInfo.school}</p>
        </S.PersonInfo>
        <S.ActiveInfo>
          게시물
          <p className="postCount">{userInfo.feed_count}</p>
          팔로워
          <p className="followerCount">{userInfo.follower_count}</p>
          팔로잉
          <p className="followingCount">{userInfo.following_count}</p>
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
              <SeeMoreModal optionList={seeMoreOptionList} setModalStatus={setSeeMoreModalStatus} />
            )}
          </S.SeeMoreBtn>
        </S.Follow>
      )}
    </S.Wrapper>
  );
};
export default Profile;
