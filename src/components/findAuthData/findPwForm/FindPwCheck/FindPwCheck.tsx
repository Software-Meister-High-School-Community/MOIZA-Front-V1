import React, { Dispatch, SetStateAction } from 'react';
import * as S from '../style';

interface IFindPwCheckProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

const FindPwCheck: React.FC<IFindPwCheckProps> = ({ id, setId }) => {
  return (
    <>
      <S.FindPwFormTitle>아이디를 입력해주세요.</S.FindPwFormTitle>
      <S.FindPwFormInputWrap>
        <S.FindPwFormTextInputWrap>
          <S.FindPwFormTextInput
            isWrite={id !== ''}
            value={id}
            placeholder="아이디"
            name="id"
            onChange={e => setId(e.target.value)}
          />
        </S.FindPwFormTextInputWrap>
      </S.FindPwFormInputWrap>
    </>
  );
};
export default FindPwCheck;
