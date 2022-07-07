import React, { ChangeEvent, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ManageReport from './manageReport';
import Notification from './noticeList';
import { GRADUATE, REPORT, NOTICE, TManageMent } from './constant';
import WithAuthorization from '../../hoc/withAuthorization';
import CertifyGraduation from './certifiGraduation';
import Pagenation from '../common/pagenation';
import SelectManagementType from './selectManagementType';
import { useParams } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { managementState, adminPageNationState } from '../../store/admin';

export interface IFilterState {
  keyword: string;
}

const AdminMain: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const { managementType } = useParams();
  const setManagementState = useSetRecoilState(managementState);
  const management = (managementType || REPORT) as TManageMent;
  const [pageNationState, setPageNationState] = useRecoilState(adminPageNationState);
  useEffect(() => {
    setKeyword('');
    setManagementState({ managementType: management });
    setPageNationState({ ...pageNationState, page: 1 });
  }, [managementType]);
  const onChangeSearchKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );
  const posts = useMemo(() => {
    if (management === REPORT)
      return <ManageReport keyword={keyword} onChangeSearchKeyword={onChangeSearchKeyword} />;
    else if (management === NOTICE) return <Notification />;
    else if (management === GRADUATE)
      return <CertifyGraduation keyword={keyword} onChangeSearchKeyword={onChangeSearchKeyword} />;
    else return <></>;
  }, [management, keyword, onChangeSearchKeyword]);
  const onChangePage = useCallback(
    (page: number) => {
      setPageNationState({ ...pageNationState, page: page });
    },
    [pageNationState, setPageNationState],
  );
  return (
    <Wrapper>
      <Title>어드민 페이지</Title>
      <SelectManagementType />
      {posts}
      <Pagenation
        total={pageNationState.totalElement}
        limit={13}
        page={pageNationState.page}
        setPage={onChangePage}
      />
    </Wrapper>
  );
};
// export default WithAuthorization(AdminMain, ['ADMIN']);
export default AdminMain;

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
