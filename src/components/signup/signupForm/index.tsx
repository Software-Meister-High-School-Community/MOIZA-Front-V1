import { schoolEmailTransform } from '../../../utils/function/schoolEmailTransform';
import Index from '../../common/button/submitButton';
import OptionButton from '../../common/select/optionButton';
import RadioButton from '../../common/select/radioButton';
import { SignupFooterWrap, SignupFormsWrap } from '../style';
import * as S from './style';
import * as CONST from '../constant';
import useSignupInfo from '../../../hooks/signup/useSignupInfo';
import TextInput from '../../common/Input/TextInput';
import { ChangeEvent, useState } from 'react';

const SignupForm: React.FC = () => {
  const {
    userInfo,
    onChangeSchoolType,
    onChangeSexType,
    onChangeInputValue,
    onChangeUserType,
    certification,
    onSendCertificationNumber,
    checkCertification,
    goToSetPw,
    onChangeVerifyCode,
    verifyCode,
  } = useSignupInfo();
  return (
    <SignupFormsWrap>
      <S.SignupFormBox>
        <S.SignupFormTitle marginBottom={36}>구분</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <RadioButton
            selected={userInfo.user_type}
            setSelected={onChangeUserType}
            radioArray={CONST.studentStatusList}
            name="studentStatusSelect"
          />
        </S.SignupFormFlexWrap>
        <S.SignupFormTitle marginBottom={13}>이름</S.SignupFormTitle>

        <TextInput
          width="250"
          value={userInfo.name}
          setValue={onChangeInputValue}
          type="text"
          name="name"
          margin={'0px 0px 70px 0px'}
        />
        <S.SignupFormBirthTitleWrap>
          <S.SignupFormBirthTitle>생년월일</S.SignupFormBirthTitle>
          <S.SignupFormGuideBirthRule>ex) 20050624</S.SignupFormGuideBirthRule>
        </S.SignupFormBirthTitleWrap>
        <TextInput
          width="250"
          value={userInfo.birthday}
          setValue={onChangeInputValue}
          type="number"
          name="birthday"
          margin={'0px 0px 70px 0px'}
        />
        <S.SignupFormTitle marginBottom={36}>성별</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <RadioButton
            selected={userInfo.sex}
            setSelected={onChangeSexType}
            radioArray={CONST.sexList}
            name="sexSelect"
          />
        </S.SignupFormFlexWrap>
        <S.SignupFormTitle marginBottom={13}>학교선택</S.SignupFormTitle>
        <S.SignupFormSchoolWrap>
          {CONST.schoolList.map(item => {
            return (
              <S.SignupFormSchoolButton name={item.id} key={item.id}>
                <OptionButton
                  isSelected={userInfo.school === item.id}
                  text={item.summary}
                  optionId={item.id}
                  onClick={onChangeSchoolType}
                />
              </S.SignupFormSchoolButton>
            );
          })}
        </S.SignupFormSchoolWrap>
        <S.SignupFormTitle marginBottom={13}>학교 이메일</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <TextInput
            value={userInfo.email}
            name="email"
            setValue={onChangeInputValue}
            type="text"
          />
          {userInfo.user_type === 'STUDENT' && (
            <S.SignupFormSchoolMailText>
              {schoolEmailTransform(userInfo.school)}
            </S.SignupFormSchoolMailText>
          )}
          <S.SignupFormSubmitButton
            isGraduate={userInfo.user_type === 'GRADUATE'}
            onClick={onSendCertificationNumber}
          >
            인증번호 보내기
          </S.SignupFormSubmitButton>
        </S.SignupFormFlexWrap>
        <S.SignupFormTitle marginBottom={13}>인증번호</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <TextInput
            type="text"
            value={verifyCode}
            setValue={onChangeVerifyCode}
            name="certificationNumber"
            disabled={!certification.send}
          />
          <S.SignupFormSubmitButton isGraduate onClick={checkCertification}>
            인증하기
          </S.SignupFormSubmitButton>
        </S.SignupFormFlexWrap>
        {userInfo.user_type === 'GRADUATE' && (
          <S.SignupFormAlertText>
            ※ 가입 후 졸업 인증을 하시면 모이자 이용이 가능합니다.
          </S.SignupFormAlertText>
        )}
      </S.SignupFormBox>
      <SignupFooterWrap>
        <Index text={'다음 단계'} blue big disable={!certification.check} handleClick={goToSetPw} />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};

export default SignupForm;
