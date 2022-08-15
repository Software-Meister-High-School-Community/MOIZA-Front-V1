import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .pagenation {
    margin-top: 130px;
    margin-bottom: 40px;
  }
`;

export const PostHeadDiv = styled.div`
  width: 1196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostNameDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PostName = styled.p`
  height: 38px;
  font-size: ${({ theme }) => theme.fontSize.head_small};
  font-style: normal;
  font-weight: 400;
`;

export const PostVector = styled.img`
  width: 26px;
  height: 26px;
  margin-top: 2px;
  cursor: pointer;
  margin-left: 12px;
`;

export const PostDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RadioBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

export const SelectDiv = styled.div`
  display: flex;
`;

export const PosFormtDiv = styled.div`
  margin-top: 55px;
`;

export const WriteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 65px;
  height: 65px;
  margin-right: 10px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.color.main_yellow_color};
  right: 10px;
  top: 50%;
  cursor: pointer;
`;
