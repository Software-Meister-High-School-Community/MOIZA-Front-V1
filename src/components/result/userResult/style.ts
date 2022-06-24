import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 292px;
  margin: 0 auto 98px auto;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-top: 6px;
`;
export const Container = styled(Slider)`
  display: flex;
  width: 1200px;
  margin: 20px 0 25px 0;
`;
export const ItemBox = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px 24px;
  margin-right: 30px;
  width: 175px;
  height: 249px;
  background-color: ${props => props.theme.color.gray_color1};
  border-radius: 11px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export const StudentType = styled.p`
  color: ${props => props.theme.color.gray_color5};
  font-size: ${props => props.theme.fontSize.body_small};
  margin-top: 28px;
`;

export const SchoolName = styled.p`
  color: ${props => props.theme.color.gray_color6};
  font-size: ${props => props.theme.fontSize.body_medium};
  font-weight: 400;
  margin-top: 11px;
`;
export const Name = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.color.gray_color6};
  font-size: ${props => props.theme.fontSize.body_medium};
`;

export const ButtonBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 48px;
  height: 17px;
  display: flex;
  justify-content: space-between;
`;
export const prevButton = styled.img`
  position: absolute;
  right: 60px;
  cursor: pointer;
`;

export const NextButton = styled.img`
  position: absolute;
  right: 30px;
  cursor: pointer;
`;
