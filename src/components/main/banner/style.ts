import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 68px 36px 0 36px;
`;

export const Banner = styled.div`
  width: 645px;
  height: 400px;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SchoolName = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: 700;
  font-size: 30px;

  font-style: normal;
  margin: ${props => props.margin};
`;

export const SchoolText = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  font-weight: 400;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.body_small};
`;

export const Hr = styled.hr<{
  margin: string;
}>`
  width: 130px;
  height: 1px;
  margin: ${props => props.margin};
  border: none;
  background-color: #eeb322;
`;

export const SchoolClass1 = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  font-style: normal;
  font-weight: 400;

  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;

export const SchoolClass2 = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  font-weight: 400;

  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;
export const SchoolClass3 = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  font-weight: 400;

  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;

export const SchoolHomePage = styled.p<{
  width: string;
  margin: string;
}>`
  width: ${props => props.width};
  margin: ${props => props.margin};
  color: ${({ theme }) => theme.color.gray_color5};
  cursor: pointer;
  text-decoration: underline 1px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.body_small};
`;
