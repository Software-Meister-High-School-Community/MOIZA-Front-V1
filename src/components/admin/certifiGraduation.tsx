import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGraduateList } from '../../utils/api/admin';
import SearchInPage from '../common/search/searchInPage';
import RadioButton from '../common/select/radioButton';
import { TGraduateStatus } from '../../models/common';
import { IFilterState } from './index';
import GraduationBox from './graduationBox';
import { IGraduateListResponse } from '../../models/admin/response';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { adminPageNationState } from '../../store/admin';

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
  keyword: string;
  onChangeSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CertifyGraduation: React.FC<IProps> = ({ keyword, onChangeSearchKeyword }) => {
  const [graduateStatus, setGraduateStatus] = useState<TGraduateStatus>('REQUESTED');
  const [graduateList, setGraduateList] = useState<IGraduateListResponse>();
  const [adminPageNation, setAdminPageNation] = useRecoilState(adminPageNationState);
  useEffect(() => {
    getGraduateList(graduateStatus, keyword, adminPageNation.page - 1).then(res => {
      setGraduateList(res);
      setAdminPageNation({ ...adminPageNation, totalElement: res.total_count });
    });
  }, [graduateStatus, keyword, adminPageNation]);
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
      const res = getGraduateList(graduateStatus, keyword, adminPageNation.page);
    },
    [keyword, adminPageNation],
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
          value={keyword}
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
