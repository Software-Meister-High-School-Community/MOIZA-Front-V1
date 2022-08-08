import styled from 'styled-components';
interface IStyleProps {
  backgroundColor: any;
}
export const Wrapper = styled.div`
  width: 1200px;
  margin: 155px auto 0 auto;
  border-top: 1px solid ${props => props.theme.color.gray_color4};
`;
export const Phrases = styled.p`
  margin: 50px 0;
  font-weight: 400;
  font-size: ${props => props.theme.fontSize.button_large};
  color: ${props => props.theme.color.gray_color4};
`;
export const ItemContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const ItemBox = styled.div<IStyleProps>`
  box-sizing: border-box;
  padding: 30px;
  width: 380px;
  height: 380px;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const ItemImg = styled.img`
  width: 108px;
  height: 108px;
`;
export const Date = styled.pre`
  margin-top: 14px;
  line-height: 16px;
  font-weight: 400;
  color: ${props => props.theme.color.gray_color1};
  font-size: ${props => props.theme.fontSize.body_small};
`;
export const User = styled.p`
  color: ${props => props.theme.color.gray_color1};
  font-size: ${props => props.theme.fontSize.body_small};
  font-weight: 400;
  margin-top: auto;
  line-height: 16px;
`;
export const ItemTitle = styled.h1`
  color: ${props => props.theme.color.gray_color1};
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  line-height: 28px;
  margin-top: 80px;
`;
export const AddBtn = styled.button`
  background: ${props => props.theme.color.gray_color1};
  border: 1px solid ${props => props.theme.color.gray_color4};
  font-size: 18px;
  width: 96px;
  height: 47px;
  display: block;
  margin: 137px auto;
  cursor: pointer;
  box-sizing: border-box;
`;
