import * as S from './styles';
import UseReplaceKeyword from '../../../../common/search/replaceKeyword';
import { translateSchool } from '../../../../../utils/function/translate/school';
import { translateUserScope } from '../../../../../utils/function/translate/user_scope';
import Arrow from '../../../../../assets/img/common/arrow.svg';
import React, { ChangeEvent, useState } from 'react';
import { IReportedUser } from '../../../../../models/admin/response';
import { userSuspension } from '../../../../../utils/api/admin';

interface Props {
  i: IReportedUser;
}

const UserBox = ({ i }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <S.Wrapper isOpen={showDetail} key={i.user_id}>
      <S.Summary>
        <S.UserInfo>
          <S.Name>
            <UseReplaceKeyword string={i.name} keyword={'asd'} fontColor="#0048FF" />
          </S.Name>
          <S.Name>{translateSchool(i.school)}</S.Name>
          <S.Type>{translateUserScope(i.type)}</S.Type>
        </S.UserInfo>
        <S.History>
          <S.Progress>
            정지 <p>{i.suspension_created_at}</p>일 / <p>{i.suspension_expired_at}</p>일 경과
          </S.Progress>
          <S.Count>
            누적 <p>{i.user_reported_count}</p>회
          </S.Count>
          <S.Arrow isFold={showDetail} src={Arrow} onClick={() => setShowDetail(!showDetail)} />
        </S.History>
      </S.Summary>
      {showDetail && (
        <Detail
          user_reported_count={i.user_reported_count}
          feed_reported_count={i.feed_reported_count}
          comment_reported_count={i.comment_reported_count}
        />
      )}
    </S.Wrapper>
  );
};

interface ReportDetailPropsType {
  user_reported_count: number;
  feed_reported_count: number;
  comment_reported_count: number;
}

const Detail: React.FC<ReportDetailPropsType> = ({
  user_reported_count,
  feed_reported_count,
  comment_reported_count,
}) => {
  const [suspension, setSuspension] = useState<null | number>(null);
  const onChangeSuspension = (e: ChangeEvent<HTMLInputElement>) => {
    setSuspension(Number(e.target.value));
  };
  const onClickSuspension = () => {
    userSuspension(1);
  };
  return (
    <S.DetailWrapper>
      <S.Line />
      <S.Details>
        <S.ReportCount>
          사용자 신고
          <p>{user_reported_count}</p>
        </S.ReportCount>
        <S.ReportCount>
          게시물 신고
          <p>{feed_reported_count}</p>
        </S.ReportCount>
        <S.ReportCount>
          답변 신고
          <p>{comment_reported_count}</p>
        </S.ReportCount>
        <S.HeigthLine />
        <S.UserFreeze>
          <p>정지</p>
          <input onChange={onChangeSuspension} value={suspension || ''} type="number" />
          <p>일</p>
          <button onClick={onClickSuspension}>확인</button>
        </S.UserFreeze>
        <S.HeigthLine />
        <S.RemoveUser>사용자 탈퇴 시키기</S.RemoveUser>
      </S.Details>
    </S.DetailWrapper>
  );
};
export default UserBox;
