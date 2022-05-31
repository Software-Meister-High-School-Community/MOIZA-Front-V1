import React, { ChangeEvent, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ManageReport from './manageReport';
import Notification from './noticeList';
import { useQuery } from '../../hooks/useQuery';
import { AUTHORITY, ManagementType, MANAGE_REPORT, NOTIFICATION } from './constant';
import WithAuthorization from '../../hoc/withAuthorization';
import CertifyGraduation from './certifiGraduation';
import Pagenation from '../common/pagenation';

export interface IFilterState {
  keyword: string;
  page: number;
}

const AdminMain: React.FC = () => {
  const [managementType, setManagementType] = useState<ManagementType>(MANAGE_REPORT);
  const pageType = useQuery().get('page-type');
  const [totalElementCount, setTotalElementsCount] = useState(1);
  const [filterState, setFilterState] = useState<IFilterState>({
    keyword: '',
    page: 1,
  });
  const onChangeSearchKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFilterState({ ...filterState, keyword: e.target.value });
    },
    [filterState, setFilterState],
  );
  useEffect(() => {
    pageType === 'notification'
      ? setManagementType(NOTIFICATION)
      : setManagementType(MANAGE_REPORT);
  }, [pageType]);
  const changeManagementType = (id: ManagementType) => {
    setManagementType(id);
  };
  const posts = useMemo(() => {
    if (managementType === 'REPORT')
      return (
        <ManageReport
          filterState={filterState}
          setTotalElementsCount={setTotalElementsCount}
          onChangeSearchKeyword={onChangeSearchKeyword}
        />
      );
    else if (managementType === 'NOTIFICATION')
      return <Notification page={filterState.page} setTotalElementsCount={setTotalElementsCount} />;
    else
      return (
        <CertifyGraduation
          filterState={filterState}
          onChangeSearchKeyword={onChangeSearchKeyword}
          setTotalElementsCount={setTotalElementsCount}
        />
      );
  }, [managementType, filterState, setFilterState]);
  useEffect(() => {
    setFilterState({
      keyword: '',
      page: 1,
    });
  }, [managementType]);
  const onChangePage = useCallback(
    (page: number) => {
      setFilterState({ ...filterState, page: page });
    },
    [filterState, setFilterState],
  );
  return (
    <Wrapper>
      <Title>어드민 페이지</Title>
      <TypeWrapper>
        <Types>
          <Type
            id={MANAGE_REPORT}
            onClick={() => changeManagementType(MANAGE_REPORT)}
            isSelected={managementType === MANAGE_REPORT}
          >
            신고관리
          </Type>
          <Type
            id={NOTIFICATION}
            onClick={() => changeManagementType(NOTIFICATION)}
            isSelected={managementType === NOTIFICATION}
          >
            공지사항
          </Type>
          <Type
            id={AUTHORITY}
            onClick={() => changeManagementType(AUTHORITY)}
            isSelected={managementType === AUTHORITY}
          >
            졸업생 인증
          </Type>
        </Types>
      </TypeWrapper>
      {posts}
      <Pagenation
        total={totalElementCount}
        limit={5}
        page={filterState.page}
        setPage={onChangePage}
      />
    </Wrapper>
  );
};
// export default WithAuthorization(AdminMain, ['ADMIN']);
export default AdminMain;

interface StyleProps {
  isSelected: boolean;
}

const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: ${props => props.theme.fontSize.head_small};
  font-weight: 700;

  font-style: normal;
  line-height: 37.5px;
  margin-top: 123px;
  margin-left: 2px;
`;
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
