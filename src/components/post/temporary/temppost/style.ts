import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.li`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 0 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 24px;
    height: 24px;
  }
  > h1 {
    margin-left: 20px;

    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    font-size: ${({ theme }) => theme.fontSize.body_large};
    color: ${({ theme }) => theme.color.gray_color6};
  }
`;

export const StateDiv = styled.div`
  display: flex;
  margin-left: 35px;
`;

export const FetchState = styled.em`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 34px;
  margin-right: 15px;
  border: 1px solid ${({ theme }) => theme.color.gray_color3};
  border-radius: 25px;
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.body_small};
    color: ${({ theme }) => theme.color.gray_color5};
  }
`;

export const DeleteState = styled.em`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 34px;
  margin-right: 24px;
  border: 1px solid ${({ theme }) => theme.color.gray_color3};
  border-radius: 25px;
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.body_small};
    color: red;
  }
`;

export const Line = styled.div`
  max-width: 1px;
  height: 24px;
  border: 0px;
  border-right: 1px solid ${props => props.theme.color.gray_color3};
`;

export const Date = styled.div`
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
