import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { registerSchoolSelect, signUpFormData } from '../../../store/signup/registerInfoAtom';
import { schoolEmailTransform } from '../../../utils/function/schoolEmailTransform';
import SubmitButton from '../../common/button/SubmitButton/SubmitButton';
import OptionButton from '../../common/select/optionButton/OptionButton';
import RadioButton from '../../common/select/radioButton/RadioButton';
import { SignupFooterWrap, SignupFormsWrap } from '../style';
import * as S from './style';
import * as CONST from '../constant/index';
import useSignupInfo from '../../../hooks/signup/useSignupInfo';
import TextInput from '../../common/Input/TextInput/TextInput';

const SignupForm: React.FC = () => {
  const [schoolSelect, setSchoolSelect] = useRecoilState(registerSchoolSelect);
  const [userInfo, setUserInfo] = useRecoilState(signUpFormData);

  const {
    sexSelect,
    setSexSelect,
    studentStatus,
    setStudentStatus,
    sendCertificationNumber,
    isInfoComplete,
    handleInfo,
    onSendCertificationNumber,
    checkCertification,
    goToSetPw,
  } = useSignupInfo();

  useEffect(() => {
    setUserInfo(prev => ({
      ...prev,
      sex: sexSelect,
      schoolSelect: schoolSelect,
      studentStatus: studentStatus,
    }));
  }, [sexSelect, schoolSelect, studentStatus, setUserInfo]);

  return (
    <SignupFormsWrap>
      <S.SignupFormBox>
        <S.SignupFormTitle marginBottom={36}>구분</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <RadioButton
            selected={studentStatus}
            setSelected={setStudentStatus}
            radioArray={CONST.studentStatusList}
            name="studentStatusSelect"
          />
        </S.SignupFormFlexWrap>
        <S.SignupFormTitle marginBottom={13}>이름</S.SignupFormTitle>

        <TextInput
          width="250"
          value={userInfo.name}
          setValue={handleInfo}
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
          value={userInfo.birth}
          setValue={handleInfo}
          type="text"
          name="birth"
          margin={'0px 0px 70px 0px'}
        />
        <S.SignupFormTitle marginBottom={36}>성별</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <RadioButton
            selected={sexSelect}
            setSelected={setSexSelect}
            radioArray={CONST.sexList}
            name="sexSelect"
          />
        </S.SignupFormFlexWrap>
        <S.SignupFormTitle marginBottom={13}>학교선택</S.SignupFormTitle>
        <S.SignupFormSchoolWrap>
          {CONST.schoolList.map(item => {
            return (
              <S.SignupFormSchoolButton name={item} key={item}>
                <OptionButton
                  isSelected={schoolSelect === item}
                  text={item}
                  onClick={setSchoolSelect}
                />
              </S.SignupFormSchoolButton>
            );
          })}
        </S.SignupFormSchoolWrap>
        <S.SignupFormTitle marginBottom={13}>학교 이메일</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <TextInput value={userInfo.email} name="email" setValue={handleInfo} type="text" />
          {studentStatus === '재학생' && (
            <S.SignupFormSchoolMailText>
              {schoolEmailTransform(schoolSelect)}
            </S.SignupFormSchoolMailText>
          )}
          <S.SignupFormSubmitButton
            isGraduate={studentStatus === '졸업생'}
            onClick={onSendCertificationNumber}
          >
            인증번호 보내기
          </S.SignupFormSubmitButton>
        </S.SignupFormFlexWrap>
        <S.SignupFormTitle marginBottom={13}>인증번호</S.SignupFormTitle>
        <S.SignupFormFlexWrap>
          <TextInput
            type="text"
            value={userInfo.certificationNumber}
            setValue={handleInfo}
            name="certificationNumber"
            disabled={!sendCertificationNumber}
          />
          <S.SignupFormSubmitButton isGraduate onClick={checkCertification}>
            인증하기
          </S.SignupFormSubmitButton>
        </S.SignupFormFlexWrap>
        {studentStatus === '졸업생' && (
          <S.SignupFormAlertText>
            ※ 가입 후 졸업 인증을 하시면 모이자 이용이 가능합니다.
          </S.SignupFormAlertText>
        )}
      </S.SignupFormBox>
      <SignupFooterWrap>
        <SubmitButton
          text={'다음 단계'}
          blue
          big
          disable={isInfoComplete}
          handleClick={goToSetPw}
        />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};

export default SignupForm;
