import { NOTICE, REPORT, GRADUATE, TManageMent } from './constant';
import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';
import { managementState } from '../../store/admin';

const SelectManagementType = () => {
  const { managementType } = useRecoilValue(managementState);
  const navigate = useNavigate();
  const changeManagementType = (type: TManageMent) => {
    navigate(`/admin/${type}`);
  };
  return (
    <TypeWrapper>
      <Types>
        <Type
          id={REPORT}
          onClick={() => changeManagementType(REPORT)}
          isSelected={managementType === REPORT}
        >
          신고관리
        </Type>
        <Type
          id={NOTICE}
          onClick={() => changeManagementType(NOTICE)}
          isSelected={managementType === NOTICE}
        >
          공지사항
        </Type>
        <Type
          id={GRADUATE}
          onClick={() => changeManagementType(GRADUATE)}
          isSelected={managementType === GRADUATE}
        >
          졸업생 인증
        </Type>
      </Types>
    </TypeWrapper>
  );
};
export default SelectManagementType;

interface StyleProps {
  isSelected: boolean;
}

const TypeWrapper = styled.section`
  width: 1200px;
  display: flex;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
const Types = styled.div`
  display: flex;
  border-bottom: 1px solid #999999;
`;
const Type = styled.div`
  cursor: pointer;
  width: 400px;
  height: 45px;
  background-color: ${(props: StyleProps) => (props.isSelected ? '#999999' : '#FFFFFF')};

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props: StyleProps) => (props.isSelected ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  justify-content: center;
  :first-of-type {
    border-radius: 5px 0 0 0;
  }
  :last-child {
    border-radius: 0 5px 0 0;
  }
`;
