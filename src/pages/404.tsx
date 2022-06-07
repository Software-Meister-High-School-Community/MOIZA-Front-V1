import styled from 'styled-components';
import SubmitButton from '../components/common/button/submitButton';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const moveToMainPage = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <PageType>404</PageType>
      <NotFound>페이지를 찾을 수 없습니다.</NotFound>
      <IntroduceWrapper>
        <p>요청하신 페이지가 사라졌거나 잘못된 경로를 이용했을 수 있습니다.</p>
        <p>올바른 URL을 입력하였는지 확인한 후 자세한 내용은 사이트 소유자에게 문의하세요.</p>
      </IntroduceWrapper>
      <SubmitButton text="메인으로 돌아가기" big={false} blue={true} handleClick={moveToMainPage} />
    </Wrapper>
  );
};
export default NotFoundPage;

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
  > .submitButtonBox {
    margin-top: 44px;
    height: 36px;
  }
`;
const PageType = styled.h1`
  margin-top: 183px;
  font-size: 120px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray_color5};
  line-height: 140px;
`;
const NotFound = styled.strong`
  font-size: 32px;
  font-weight: 700;
  color: #9e9e9e;
  line-height: 37.5px;
  margin-top: 22px;
`;
const IntroduceWrapper = styled.div`
  margin-top: 31px;
  > p {
    font-size: 18px;
    font-weight: 400;
    color: #9e9e9e;
    line-height: 28px;
  }
`;
