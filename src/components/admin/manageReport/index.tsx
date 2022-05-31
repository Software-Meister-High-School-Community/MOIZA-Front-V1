import * as S from './styles';
import { typeArr, inputStyle } from '../constant';
import { useState, ChangeEvent, useMemo, FormEvent, useCallback } from 'react';
import ReportOfUser from './reports/user';
import ReportOfPost from './reports/post';
import ReportsofComment from './reports/comment';
import RadioButton from '../../common/select/radioButton';
import SearchInPage from '../../common/search/searchInPage/index';
import { IFilterState } from '../index';

export type TReport = 'USERS' | 'FEEDS' | 'COMMENTS';

interface IProps {
  filterState: IFilterState;
  onChangeSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  setTotalElementsCount: (page: number) => void;
}

const ManageReport: React.FC<IProps> = ({
  filterState,
  onChangeSearchKeyword,
  setTotalElementsCount,
}) => {
  const [reportType, setReportType] = useState<TReport>('USERS');
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
          value={filterState.keyword}
          placeholder={InputStyleObject.placeholder}
          width={InputStyleObject.width}
        />
      </S.Types>
      {reportType === 'USERS' ? (
        <ReportOfUser />
      ) : reportType === 'FEEDS' ? (
        <ReportOfPost />
      ) : (
        <ReportsofComment />
      )}
    </S.Wrapper>
  );
};
export default ManageReport;
