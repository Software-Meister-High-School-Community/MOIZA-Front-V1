import * as S from './styles';
import Type from '../../../../../assets/img/common/questionPostIcon.svg';
import UseReplaceKeyword from '../../../../common/search/replaceKeyword';
import { deleteFeed } from '../../../../../utils/api/feeds';
import { IReportedFeed } from '../../../../../models/admin/response';
import {translateUserScope} from "../../../../../utils/function/translate/user_scope";
import {translateSchool} from "../../../../../utils/function/translate/school";

interface IProps {
  item: IReportedFeed[];
}

const ReportOfPost: React.FC<IProps> = ({ item }) => {
  const onClickRemovePost = () => {
    deleteFeed(1);
  };
  return (
    <>
      {item.map(i => (
        <S.Wrapper key={i.id}>
          <section className="summary">
            <S.Title>
              <img src={Type} />
              <h1>
                <UseReplaceKeyword keyword={''} string={i.title} fontColor="#0048FF" />
              </h1>
            </S.Title>
            <S.Info>
              <S.Name>
                <UseReplaceKeyword keyword={''} string={i.author.name} fontColor="#0048FF" />
              </S.Name>
              <S.Name className="school">{translateSchool(i.author.school)}</S.Name>
              <S.UserType>{translateUserScope(i.author.type)}</S.UserType>
            </S.Info>
          </section>
          <S.Details>
            <S.Top>
              <p>{i.created_at}</p>
              <S.Button>본문 확인</S.Button>
            </S.Top>
            <S.Bottom>
              <div>
                신고<p>{i.reported_count}회</p>
              </div>
              <S.Button onClick={onClickRemovePost}>게시물 삭제</S.Button>
            </S.Bottom>
          </S.Details>
        </S.Wrapper>
      ))}
    </>
  );
};
export default ReportOfPost;
