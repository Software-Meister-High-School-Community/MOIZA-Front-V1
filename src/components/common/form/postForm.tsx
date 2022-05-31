import React from 'react';
import BookRead from '../../../assets/img/common/normalPostIcon.svg';
import Question from '../../../assets/img/common/questionPostIcon.svg';
import styled from 'styled-components';
import view from '../../../assets/img/common/openEye.svg';
import heart from '../../../assets/img/common/onHeart.svg';
import Comment from '../../../assets/img/common/comment.svg';

const PostForm: React.FC = () => {
  return (
    <Wrapper>
      <List fixed={true}>
        <img src={BookRead} alt="BookRed 이미지" />
        <h1>모이자에 오신 여러분 환영합니다!</h1>
        <Date>
          <span>22/01/21 8:29</span>
          <Line />
        </Date>
        <Views>
          <img src={view} />
          <span>1.2천</span>
        </Views>
        <CommentCount>
          <img src={Comment} />
          <span>12</span>
        </CommentCount>
        <Hearts>
          <img src={heart} />
          <span>599</span>
        </Hearts>
      </List>
    </Wrapper>
  );
};

export default PostForm;

const List = styled.li<{ fixed: boolean }>`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 23px 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > img {
    width: 30px;
    height: 30px;
  }
  > h1 {
    margin-left: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${props => (props.fixed ? '#FFB500' : '#555555')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  max-width: 1px;
  height: 24px;
  border: 0px;
  border-right: 1px solid ${props => props.theme.color.gray_color3};
`;

const Date = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  > span {
    font-style: normal;
    font-weight: 400;
    margin-right: 30px;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.gray_color4};
    margin-left: 6px;
  }
`;

const Views = styled.em`
  margin-left: 45px;
  display: flex;
  align-items: center;
  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
    margin-left: 6px;
  }
`;

const CommentCount = styled(Views)``;

const Hearts = styled(Views)`
  margin-left: 45px;
  margin-right: 15px;
  > span {
    margin-left: 7px;
  }
`;
