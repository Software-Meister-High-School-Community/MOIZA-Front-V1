import React from 'react';
import * as S from './styles';
import UseReplaceKeyword from '../../../../common/search/replaceKeyword/index';
import { removeComment } from '../../../../../utils/api/comments';
import { IReportedComment } from '../../../../../models/admin/response';

interface IProps {
  item: IReportedComment[];
}

const ReportsOfComment: React.FC<IProps> = ({ item }) => {
  const onClickRemoveComment = () => {
    removeComment(1);
  };
  return (
    <>
      {item.map((i, index) => (
        <S.Wrapper>
          <div style={{ display: 'flex' }}>
            <S.UserInfo>
              <img className="userProfile" src={''} alt="profile" />
              <S.Name>
                <UseReplaceKeyword fontColor="#0048FF" keyword={''} string={i.author.name} />
              </S.Name>
              <S.School>{i.author.school}</S.School>
              <S.UserType>{i.author.type}</S.UserType>
            </S.UserInfo>
            <S.ReportInfo>
              <S.ReportCount>
                신고 <p>{i.reported_count}</p>회
              </S.ReportCount>
              <S.Day>{i.created_at}</S.Day>
            </S.ReportInfo>
          </div>
          <S.ReportMainContent>
            <S.ReportContent>
              <UseReplaceKeyword fontColor="#0048FF" keyword={''} string={i.content} />
            </S.ReportContent>
            <S.Buttons>
              <button>본문 확인</button>
              <button onClick={onClickRemoveComment}>답변 삭제</button>
            </S.Buttons>
          </S.ReportMainContent>
        </S.Wrapper>
      ))}
    </>
  );
};
export default ReportsOfComment;
