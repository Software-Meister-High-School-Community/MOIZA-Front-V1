import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  > .userProfile {
    margin-left: 36px;
    width: 200px;
    height: 200px;
    margin-top: -44px;
    background-color: #ffffff;
    border-radius: 50%;
  }
  padding-bottom: 60px;
  border-bottom: 1px solid #dcdcdc;
`;
export const UserColorBox = styled.div<{
  color: string;
}>`
  width: 100%;
  height: 348px;
  background-color: ${props => props.color};
`;
export const UserInfo = styled.section`
  margin: 30px 0 0 42px;
`;

export const PersonInfo = styled.strong`
  display: flex;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  > .name {
    font-size: 32px;
    line-height: 37px;
  }
  > .school {
    font-size: 18px;
    line-height: 21px;
    margin: 8px 0 0 16px;
  }
`;
export const ActiveInfo = styled.em`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-top: 23px;
  > label {
    display: flex;
  }
`;
export const Count = styled.p`
  font-weight: bold;
  margin: 0 42px 0 10px;
  cursor: pointer;
`;
export const Introduce = styled.em`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  display: flex;
  flex-wrap: wrap;
  width: 717px;
  margin-top: 40px;
`;
export const UserLinkList = styled.ul`
  margin-top: 20px;
  > li {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #0048ff;
    cursor: pointer;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;
export const modifyProfile = styled.button`
  width: 110px;
  height: 40px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 30px 34px 0 auto;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;
export const Follow = styled.em`
  display: flex;
  margin: 53px 52px 0 auto;
  height: 36px;
`;
export const SeeMoreButton = styled.button`
  margin-left: 40.5px;
  cursor: pointer;
  position: relative;
  > div > .SeeMoreModalWrapper {
    margin-top: 24px;
  }
`;
