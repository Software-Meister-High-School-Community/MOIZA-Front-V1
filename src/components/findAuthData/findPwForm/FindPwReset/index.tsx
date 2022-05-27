import { Dispatch, SetStateAction, useState } from 'react';
import * as S from '../style';
import Index from '../../../common/button/eyeButton';
import { IFindPwResetDataProps } from '../../../../utils/interface/FindAuthData';

interface IFindPwResetRrops {
  resetPw: IFindPwResetDataProps;
  setResetPw: Dispatch<SetStateAction<IFindPwResetDataProps>>;
}

const FindPwReset: React.FC<IFindPwResetRrops> = ({ resetPw, setResetPw }) => {
  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  const { pw, checkPw } = resetPw;
  return (
    <>
      <S.FindPwFormTitle>비밀번호 재설정</S.FindPwFormTitle>
      <S.FindPwFormInputWrap>
        <S.FindPwFormTextInputWrap>
          <S.FindPwFormTextInput
            isWrite={pw !== ''}
            name="pw"
            placeholder="새 비밀번호"
            value={pw}
            onChange={e =>
              setResetPw(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type={isPwShow ? 'text' : 'password'}
          />
          <Index isShow={isPwShow} onClick={setIsPwShow} />
        </S.FindPwFormTextInputWrap>
        <S.FindPwFormGuideText>
          8~16자 영문 대소문자, 숫자, 특수문자를 모두 조합하여 구성해주세요.
        </S.FindPwFormGuideText>
        <S.FindPwFormTextInputWrap>
          <S.FindPwFormTextInput
            isWrite={checkPw !== ''}
            name="checkPw"
            placeholder="새 비밀번호 확인"
            value={checkPw}
            onChange={e =>
              setResetPw(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type={isCheckPwShow ? 'text' : 'password'}
          />
          <Index isShow={isCheckPwShow} onClick={setIsCheckPwShow} />
        </S.FindPwFormTextInputWrap>
      </S.FindPwFormInputWrap>
    </>
  );
};

export default FindPwReset;
