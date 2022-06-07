import * as S from './styles';
import { typeArr, inputStyle } from '../constant';
import { useState, ChangeEvent, useMemo, FormEvent, useCallback, useEffect } from 'react';
import ReportOfUser from './reports/user';
import ReportOfPost from './reports/post';
import ReportsOfComment from './reports/comment';
import RadioButton from '../../common/select/radioButton';
import SearchInPage from '../../common/search/searchInPage/index';
import {
  ICommentReportResponse,
  IFeedReportResponse,
  IUserReportResponse,
} from '../../../models/admin/response';
import { getCommentReports, getFeedReports, getUserReports } from '../../../utils/api/admin';
import { useRecoilState } from 'recoil';
import { adminPageNationState } from '../../../store/admin';

export type TReport = 'USERS' | 'FEEDS' | 'COMMENTS';

interface IReports {
  user: IUserReportResponse;
  feed: IFeedReportResponse;
  comment: ICommentReportResponse;
}

interface IProps {
  keyword: string;
  onChangeSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ManageReport: React.FC<IProps> = ({ keyword, onChangeSearchKeyword }) => {
  const [reportType, setReportType] = useState<TReport>('USERS');
  const [reports, setReports] = useState<IReports>();
  const [pageNationState, setPageNationState] = useRecoilState(adminPageNationState);
  useEffect(() => {
    if (reportType === 'USERS') {
      getUserReports(pageNationState.page - 1, keyword).then(res => {
        setReports({
          ...reports,
          user: res,
        } as IReports);
        setPageNationState({ ...pageNationState, totalElement: res.total_count });
      });
    } else if (reportType === 'FEEDS') {
      getFeedReports(pageNationState.page - 1, keyword).then(res => {
        setReports({
          ...reports,
          feed: res,
        } as IReports);
        setPageNationState({ ...pageNationState, totalElement: res.total_count });
      });
    } else if (reportType === 'COMMENTS') {
      getCommentReports(pageNationState.page - 1, keyword).then(res => {
        setReports({
          ...reports,
          comment: res,
        } as IReports);
        setPageNationState({ ...pageNationState, totalElement: res.total_count });
      });
    }
  }, [reportType, pageNationState, keyword]);
  const reportList = useCallback(() => {
    if (reportType === 'USERS' && reports?.user)
      return <ReportOfUser item={reports.user.user_list} />;
    else if (reportType === 'FEEDS' && reports?.feed)
      return <ReportOfPost item={reports.feed.post_list} />;
    else if (reportType === 'COMMENTS' && reports?.comment)
      return <ReportsOfComment item={reports.comment.comment_list} />;
    else return <></>;
  }, [reportType, setReports, reports]);
  const onChangeDropdown = useCallback(
    (value: string) => {
      const selectedValue = value as TReport;
      setReportType(selectedValue);
    },
    [reportType, setReportType],
  );
  const onKeyPressSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const InputStyleObject = useMemo(() => {
    if (reportType === 'USERS') return inputStyle.user;
    else if (reportType === 'FEEDS') return inputStyle.post;
    else return inputStyle.comment;
  }, [reportType]);
  return (
    <S.Wrapper>
      <S.Types>
        <RadioButton
          selected={reportType}
          setSelected={onChangeDropdown}
          radioArray={typeArr}
          name="typecheckbox"
        />
        <SearchInPage
          heigth="40"
          fontsize="16"
          onSubmit={onKeyPressSearch}
          onChange={onChangeSearchKeyword}
          value={keyword}
          placeholder={InputStyleObject.placeholder}
          width={InputStyleObject.width}
        />
      </S.Types>
      <>{reportList}</>
    </S.Wrapper>
  );
};
export default ManageReport;
