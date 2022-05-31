import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGraduateList } from '../../utils/api/admin';
import SearchInPage from '../common/search/searchInPage';
import RadioButton from '../common/select/radioButton';
import { TGraduateStatus } from '../../models/common';
import { IFilterState } from './index';
import GraduationBox from './graduationBox';
import { IGraduateListResponse } from '../../models/admin/response';

interface radioTypeInterface {
  id: TGraduateStatus;
  summary: '인증요청' | '승인목록' | '거절목록';
}

const CertifyTypeRadioArray: radioTypeInterface[] = [
  {
    id: 'REQUESTED',
    summary: '인증요청',
  },
  {
    id: 'APPROVED',
    summary: '승인목록',
  },
  {
    id: 'REJECTED',
    summary: '거절목록',
  },
];

interface IProps {
  filterState: IFilterState;
  onChangeSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  setTotalElementsCount: (page: number) => void;
}

const CertifyGraduation: React.FC<IProps> = ({
  filterState,
  onChangeSearchKeyword,
  setTotalElementsCount,
}) => {
  const [graduateStatus, setGraduateStatus] = useState<TGraduateStatus>('REQUESTED');
  const [graduateList, setGraduateList] = useState<IGraduateListResponse>();
  useEffect(() => {
    getGraduateList(graduateStatus, filterState.keyword, filterState.page).then(res => {
      setGraduateList(res);
      setTotalElementsCount(res.total_count);
    });
  }, [graduateStatus, filterState]);
  const onChangeSelectedValue = useCallback(
    (status: string) => {
      const graduateStatus = status as TGraduateStatus;
      setGraduateStatus(graduateStatus);
    },
    [graduateStatus, setGraduateStatus],
  );
  const onKeyPressSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = getGraduateList(graduateStatus, filterState.keyword, filterState.page);
    },
    [filterState],
  );
  return (
    <Wrapper>
      <Options>
        <RadioButton
          name="certifyType"
          selected={graduateStatus}
          radioArray={CertifyTypeRadioArray}
          setSelected={onChangeSelectedValue}
        />
        <SearchInPage
          heigth="40"
          fontsize="16"
          onSubmit={onKeyPressSearch}
          onChange={onChangeSearchKeyword}
          value={filterState.keyword}
          placeholder="유저 이름 입력"
          width="205"
        />
      </Options>
      <RequestLists>
        {graduateList &&
          graduateList.user_list.map((item, index) => (
            <GraduationBox item={item} key={item.user_id} />
          ))}
      </RequestLists>
    </Wrapper>
  );
};
export default CertifyGraduation;

const Wrapper = styled.section``;
const Options = styled.div`
  margin-top: 36px;
  display: flex;
`;
const RequestLists = styled.ul`
  width: 100%;
  margin-top: 20px;
`;
