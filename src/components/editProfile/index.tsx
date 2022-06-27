import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SubmitButton from '../common/button/submitButton';
import ChangeUserProfile from './changeUserProfile';
import BackgroundColor from './backgroundColor';
import Introduction from './introduction';
import LinkList from './link';
import ChangeUserType from './changeUserType';
import { useRecoilState } from 'recoil';
import { profileElementState } from '../../store/editProfile/profileElement';
import { TBackGroundColor } from '../../models/common';
import { useUserInfo } from '../../hooks/user/useUserInfo';
import { patchUser } from '../../utils/api/users';
import { postImages } from '../../utils/api/default';
import {translateSchool} from "../../utils/function/translate/school";
import {translateUserScope} from "../../utils/function/translate/user_scope";

const EditProfile: React.FC = () => {
  const [profileContent, setProfileContent] = useRecoilState(profileElementState);
  const [profile, setProfile] = useState<File | null>(null);
  const { userInfo } = useUserInfo();
  useEffect(() => {
    const { profile_background_color, link_url, profile_image_url, introduce } = userInfo;
    setProfileContent({
      profile_background_color,
      introduce_link_url: link_url,
      profile_image_url,
      introduce,
    });
  }, [userInfo]);
  const obj = { ...profileContent };
  const onChangeProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setProfile(files[0]);
  };
  const userBasicInfo = useMemo(
    () => (
      <PersonInfo>
        <p className="name">{userInfo.name}</p>
        <p className="school">
          {translateSchool(userInfo.school)} {translateUserScope(userInfo.user_scope)}
        </p>
      </PersonInfo>
    ),
    [userInfo],
  );
  const onClickEditProfile = async () => {
    if (!profile) return;
    const fd = new FormData();
    fd.append('images', profile);
    const image = await postImages({
      images: fd,
    });
    await patchUser({
      ...profileContent,
      profile_image_url: image.image_urls[0],
    });
  };
  return (
    <Wrapper color={profileContent.profile_background_color}>
      <div className="colorBox" />
      <ProfileSection>
        <ChangeUserProfile profile={profile} onChangeProfileImage={onChangeProfileImage} />
        <EditSection>
          {userBasicInfo}
          <BackgroundColor />
          <Introduction />
          <LinkList />
          <ChangeUserType />
          <section className="saveButtonSection">
            <SubmitButton
              big={false}
              text="저장"
              handleClick={onClickEditProfile}
              blue={true}
              disable={false}
            />
          </section>
        </EditSection>
      </ProfileSection>
    </Wrapper>
  );
};
export default EditProfile;

const Wrapper = styled.section<{
  color: TBackGroundColor;
}>`
  width: 1200px;
  margin: 0 auto;
  > .colorBox {
    width: 100%;
    height: 348px;
    background-color: ${props => props.color};
  }
`;
const ProfileSection = styled.section`
  display: flex;
`;
const EditSection = styled.section`
  padding: 30px 0 0 42px;
  width: 717px;
  margin-bottom: 226px;
  > .backgroundColor {
    margin-top: 67px;
  }
  > .introduce {
    margin-top: 44px;
  }
  > .link {
    margin-top: 50px;
  }
  > .saveButtonSection {
    margin-top: 76px;
    display: flex;
    justify-content: flex-end;
  }
  > .editTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;
const PersonInfo = styled.strong`
  display: flex;
  align-items: center;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  > .name {
    font-size: 32px;
    line-height: 37px;
  }
  .school {
    font-size: 18px;
    line-height: 21px;
    margin-left: 16px;
  }
`;
