import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { approveGraduate, rejectGraduate } from '../../utils/api/admin';
import BigImage from '../common/bigImage';
import { IGraduateResponse } from '../../models/admin/response';
import {translateSchool} from "../../utils/function/translate/school";
import {translateUserScope} from "../../utils/function/translate/user_scope";

interface Props {
  item: IGraduateResponse;
}

const GraduationBox: React.FC<Props> = ({ item }) => {
  const [attachment, setAttachment] = useState<boolean>(false);
  const accept = useCallback(() => {
    approveGraduate(item.user_id);
  }, [item.user_id]);
  const reject = useCallback(() => {
    rejectGraduate(item.user_id);
  }, [item.user_id]);
  const onClickCheckGraduateAttachment = () => {
    setAttachment(!attachment);
  };
  return (
    <BoxWrapper>
      {attachment && <BigImage imgs={[item.verifying_image_url]} handleDisplay={setAttachment} />}
      <UserSummary>
        <p className="userInfo">{item.name}</p>
        <p className="userInfo">{translateSchool(item.school)}</p>
        <p className="userInfo">{translateUserScope(item.type)}</p>
      </UserSummary>
      <PatchFile>
        <button className="patchFile" onClick={onClickCheckGraduateAttachment}>
          파일 확인
        </button>
      </PatchFile>
      <ApproveDenyButton>
        <button className="approve" onClick={accept}>
          승인
        </button>
        <button className="deny" onClick={reject}>
          거절
        </button>
      </ApproveDenyButton>
    </BoxWrapper>
  );
};

export default GraduationBox;

const BoxWrapper = styled.li`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.color.gray_color3};
  border-radius: 5px;
  display: flex;
  padding: 0 40px 0 26px;
  box-sizing: border-box;
  margin-bottom: 14px;
`;

const UserSummary = styled.em`
  display: flex;
  width: 455px;
  border-right: 1px solid ${({ theme }) => theme.color.gray_color3};
  > .userInfo {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.gray_color6};
    display: flex;
    align-items: center;
    ::after {
      content: '';
      width: 3px;
      height: 3px;
      background-color: ${({ theme }) => theme.color.gray_color5};
      border-radius: 50%;
      margin: 0 14px 0 13px;
    }
    :last-child {
      ::after {
        content: '';
        width: 0;
        height: 0;
      }
    }
  }
`;
const PatchFile = styled.div`
  width: 503px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.color.gray_color3};
  > .patchFile {
    width: 123px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.gray_color3};
    background-color: #ffffff;
    border-radius: 5px;
  }
`;
const ApproveDenyButton = styled.div`
  display: flex;
  align-items: center;
  > button {
    width: 70px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.gray_color3};
    background-color: #ffffff;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
  > .approve {
    color: ${({ theme }) => theme.color.gray_color6};
    margin-left: 40px;
  }
  > .deny {
    color: #eb4d3d;
    margin-left: 22px;
  }
`;
