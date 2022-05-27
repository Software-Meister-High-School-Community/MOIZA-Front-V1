import React, { useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import TextInput from '../../common/Input/TextInput';
import { ILoginProps } from '../../../utils/interface/Login';

type Props = {
  loginData: ILoginProps;
  handleLoginData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: React.FC<Props> = ({ loginData, handleLoginData }) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <S.LoginFormBox>
      <S.LoginFormInputWrap>
        <S.LoginFormTextInputWrap>
          <S.LoginFormInputTitle>아이디</S.LoginFormInputTitle>
          <TextInput
            type="text"
            value={loginData.account_id}
            name={'account_id'}
            setValue={handleLoginData}
            placeholder={'아이디'}
            margin={'13px 0 58px 0'}
          />
          <S.LoginFormInputTitle>비밀번호</S.LoginFormInputTitle>
          <TextInput
            type="password"
            value={loginData.password}
            name="password"
            setValue={handleLoginData}
            isShow={isShow}
            onClick={setIsShow}
            margin={'13px 0 0 0'}
            placeholder="비밀번호"
          />
        </S.LoginFormTextInputWrap>
        <S.LoginFormSaveInputWrap>
          <S.LoginFormSaveCheckButton checked={isCheck} onClick={() => setIsCheck(prev => !prev)}>
            <S.LoginFormSaveCheckButtonRect />
          </S.LoginFormSaveCheckButton>
          로그인 저장
        </S.LoginFormSaveInputWrap>
        <S.LoginFormCategoryInputWrap>
          <S.LoginFormCategoryInput>
            <Link to="/signup">회원가입</Link>
          </S.LoginFormCategoryInput>
          <S.LoginFormCategoryInputLine />
          <S.LoginFormCategoryInput>
            <Link to="/findauthdata">아이디 찾기</Link>
          </S.LoginFormCategoryInput>
          <S.LoginFormCategoryInputLine />
          <S.LoginFormCategoryInput>
            <Link to="/findauthdata">비밀번호 찾기</Link>
          </S.LoginFormCategoryInput>
        </S.LoginFormCategoryInputWrap>
      </S.LoginFormInputWrap>
    </S.LoginFormBox>
  );
};

export default LoginForm;
