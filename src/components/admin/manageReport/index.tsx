import * as S from './styles';
import { typeArr, inputStyle } from '../constant';
import { useState, ChangeEvent, useMemo, useEffect, FormEvent } from 'react';
import ReportOfUser from './reports/user';
import ReportOfPost from './reports/post';
import ReportsofComment from './reports/comment';
import RadioButton from '../../common/select/radioButton/RadioButton';
import SearchInPage from '../../common/search/searchInPage/index';

const ManageReport: React.FC = () => {
  const [selectedType, setselectedType] = useState('users');
  const [searchKeyword, setSearchKeyword] = useState('');
  useEffect(() => {
    setSearchKeyword('');
  }, [selectedType]);
  const onChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const onKeyPressSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const InputStyleObject = useMemo(() => {
    if (selectedType === 'users') return inputStyle.user;
    else if (selectedType === 'posts') return inputStyle.post;
    else if (selectedType === 'comments') return inputStyle.comment;
    else
      return {
        width: '1000',
        placeholder: '코드 수정해라',
      };
  }, [selectedType]);
  return (
    <S.Wrapper>
      <S.Types>
        <RadioButton
          selected={selectedType}
          setSelected={setselectedType}
          radioArray={typeArr}
          name="typecheckbox"
        />
        <SearchInPage
          heigth="40"
          fontsize="16"
          onSubmit={onKeyPressSearch}
          onChange={onChangeSearchKeyword}
          value={searchKeyword}
          placeholder={InputStyleObject.placeholder}
          width={InputStyleObject.width}
        />
      </S.Types>
      {selectedType === 'users' ? (
        <ReportOfUser />
      ) : selectedType === 'posts' ? (
        <ReportOfPost />
      ) : selectedType === 'comments' ? (
        <ReportsofComment />
      ) : (
        '<strong>코드 수정 필요</strong>'
      )}
    </S.Wrapper>
  );
};
export default ManageReport;
