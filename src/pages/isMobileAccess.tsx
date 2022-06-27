import styled from 'styled-components';
import MoizaLogo from '../assets/img/MOIZALogo/koreanHorizontalType';
import profileImage from '../assets/img/default/smallWhiteProfile.svg';
import heart from '../assets/img/default/emptyHeart.svg';
import seeMoreButton from '../assets/img/common/seeMoreBtnIcon.svg';
import SubmitButton from '../components/common/button/submitButton';
import CommentIcon from '../assets/img/common/comment.svg';
import moizaBlack from '../assets/img/MOIZALogo/moizaBlack.svg';
import { isAndroid, isIOS } from 'react-device-detect';
import SEOMetaTage from '../SEOMetaTage';

const IsMobileAccess = () => {
  const moveToStore = () => {
    if (isAndroid) window.open('https://play.google.com/store');
    else if (isIOS) window.open('https://apps.apple.com/app');
    else alert('지원하지 않는 운영체제입니다.');
  };
  return (
    <>
      <SEOMetaTage />
      <Wrapper>
        <Moiza>
          <MoizaLogo width={152} height={31} />
        </Moiza>
        <QnABox>
          <Title>모이자 모바일로 접속하는 법</Title>
          <QuestionInfo>작성일 22/06/14 17:08 | 조회수 507회</QuestionInfo>
          <UserInfo>
            <div className="profile">
              <img src={profileImage} alt="프로필" />
            </div>
            <p className="name">모여바</p>
            <p className="school">마이스터고</p>
            <p className="userType">재학생</p>
          </UserInfo>
          <Content>
            소프트웨어 마이스터 고등학교 간의 교류를 활발히 하기위해 학생들이 직접 기획하고 만든
            모이자.. 정말 가입하고 싶은데 모바일로는 어떻게 들어가죠?? ㅠㅠ
          </Content>
          <Heart>
            <img src={heart} alt="좋아요" />
            <p className="count">999+</p>
          </Heart>
        </QnABox>
        <Comment>
          답글<p className="count">1</p>
        </Comment>
        <QnABox>
          <Header>
            <MoizaLogo width={91} height={20} />
            <img src={seeMoreButton} alt="더보기" />
          </Header>
          <ButtonWrapper>
            <SubmitButton text="앱 다운로드" blue={true} big={true} handleClick={moveToStore} />
          </ButtonWrapper>
          <CommentIconWrapper>
            <img className="comment" src={CommentIcon} alt="" />
            <p className="count">0</p>
          </CommentIconWrapper>
        </QnABox>
        <Footer>
          <img src={moizaBlack} alt="모이자" />
          <p className="email">sofmoiza@gmail.com</p>
          <PolicyWrapper>
            <p className="policy">이용약관</p>
            <p className="policy">개인정보처리방침 </p>
          </PolicyWrapper>
          <p className="copyRight">©2022. Team Connect. All rights reserved</p>
        </Footer>
      </Wrapper>
    </>
  );
};
export default IsMobileAccess;

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
`;

const Moiza = styled.div`
  margin: 94.55px auto 0 auto;
  margin-bottom: 50px;
`;

const QnABox = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
`;
const QuestionInfo = styled.p`
  margin-top: 8px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #cacaca;
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`;
const ButtonWrapper = styled.div`
  margin: 46px auto 0 auto;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  > p {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    display: flex;
    align-items: center;
    ::after {
      content: '';
      float: right;
      width: 3px;
      height: 3px;
      background-color: #777777;
      border-radius: 50%;
      margin-left: 9px;
      margin-right: 10px;
    }
    :last-child {
      ::after {
        content: none;
      }
    }
  }
  > .profile {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .name {
    color: #000000;
    margin-left: 12px;
  }
  > .school,
  .userType {
    color: #777777;
  }
`;
const Content = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;
const Heart = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  > .count {
    font-size: 14px;
    line-height: 16px;
    color: #555555;
    margin-left: 4px;
  }
`;
const Header = styled.header`
  display: flex;
  > img {
    margin-left: auto;
  }
`;
const Comment = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin: 44px 0 15px 16px;
  > .count {
    margin-left: 5px;
    color: #0048ff;
    font-weight: 700;
  }
`;
const CommentIconWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  > .count {
    margin-left: 4px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
  > .comment {
    width: 20px;
    height: 20px;
  }
`;
const Footer = styled.footer`
  background-color: #f9f9f9;
  margin-top: 79px;
  box-sizing: border-box;
  padding: 28px 0 25px 16px;
  > .email,
  .copyRight {
    font-size: 10px;
    font-weight: 400;
    color: #999999;
    line-height: 12px;
    margin-top: 8px;
  }
`;
const PolicyWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  > .policy {
    font-size: 10px;
    ::after {
      content: '';
      float: right;
      margin: 0 11px;
      height: 9px;
      border-right: 1px solid #555555;
    }
    :last-child {
      ::after {
        content: none;
      }
    }
  }
`;
