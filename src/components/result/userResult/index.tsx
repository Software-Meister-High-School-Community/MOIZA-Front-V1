import * as UR from './style';
import onPrevImg from '../../../assets/img/common/prevBtnIcon.svg';
import onNextImg from '../../../assets/img/common/nextBtnIcon.svg';
import useUserResult from '../../../hooks/result/userResult/useUserResult';
import { IUserSearchResponse } from '../../../models/users/response';
import { translateUserScope } from '../../../utils/function/translate/user_scope';
import { translateSchool } from '../../../utils/function/translate/school';
import DefaultImage from '../../../assets/img/common/userDefaultIcon.svg';

interface IProps {
  userResult: IUserSearchResponse;
}

const UserResult: React.FC<IProps> = ({ userResult }) => {
  const { slider, handleNext, handlePrevious } = useUserResult();
  const sliderSettings = {
    speed: 500,
    slidesToShow: userResult.user_list.length < 7 ? userResult.user_list.length : 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    initialSlide: 0,
  };
  return (
    <UR.Wrapper>
      {userResult.user_list.length > 6 && (
        <UR.ButtonBox>
          <UR.prevButton src={onPrevImg} onClick={handlePrevious} alt="prevBtn 이미지" />
          <UR.NextButton src={onNextImg} onClick={handleNext} alt="nextBtn 이미지" />
        </UR.ButtonBox>
      )}
      <UR.Title>유저</UR.Title>
      <UR.Container ref={slider} {...sliderSettings}>
        {userResult.user_list.map(item => {
          return (
            <>
              <UR.ItemBox>
                <UR.Img src={item.profile_image_url || DefaultImage} alt="profile" />
                <UR.StudentType>{translateUserScope(item.user_scope)}</UR.StudentType>
                <UR.Name>{item.name}</UR.Name>
                <UR.SchoolName>
                  {translateSchool(item.school).replace('소프트웨어', 'SW')}
                </UR.SchoolName>
              </UR.ItemBox>
            </>
          );
        })}
      </UR.Container>
    </UR.Wrapper>
  );
};

export default UserResult;
