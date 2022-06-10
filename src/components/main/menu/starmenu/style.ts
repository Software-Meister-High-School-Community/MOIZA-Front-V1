import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarName = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
`;

export const HR = styled.hr<{
  width: string;
  height: string;
  background: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0 0 30px 0;
  border: none;
  background-color: ${props => props.background};
`;

/* starmenu */
export const PostList = styled.div`
  width: 760px;
  height: 1200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StarPost = styled.div`
  width: 366px;
  height: 212px;
  padding: 27px 30px 24px 30px;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
  margin-right: 28px;
  margin-bottom: 30px;
  border: 0.5px solid ${({ theme }) => theme.color.gray_color3};
`;

export const PostHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PostIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 13px;
`;

export const PostUser = styled.p`
  width: 150px;
  height: 16px;
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
`;

export const PostField = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
`;

export const PostText = styled.p`
  width: 306px;
  height: 82px;
  margin-bottom: 10px;
  line-height: 25px;
  font-size: ${({ theme }) => theme.fontSize.body_large};
  font-weight: 400;
  font-style: normal;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: start;
`;

export const HeartDiv = styled.div`
  display: flexl;
  > img {
    margin-left: 4px;
    margin-right: 5px;
  }
`;

export const HeartCount = styled.p`
  width: 31px;
  height: 21px;
  margin: 0 180px 0 0;
`;

export const PostDate = styled.p`
  width: 72px;
  height: 16px;
  color: ${({ theme }) => theme.color.gray_color4};
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
`;
