import React, { ReactElement, useState } from 'react';
import * as S from './GraduateCheck.style';
import * as CONST from './constant/index';
import Procedure1 from '../../assets/img/graduateCheck/graduateCheckProcedure1.svg';
import Procedure2 from '../../assets/img/graduateCheck/graduateCheckProcedure2.svg';

import GraduateCheckForm from './graduateCheckForm/GraduateCheckForm';
import GraduateCheckGuide from './graduateCheckGuide/GraduateCheckGuide';
import GraduateCheckProcedure from './graduateCheckProcedure/GraduateCheckProcedure';

const Graduate: React.FC = () => {
  const [part, setPart] = useState('졸업생 인증 안내'); //일단은 인증절차가 간단해서 전역 사용 X

  const compList: ReactElement[] = [
    <GraduateCheckGuide setPart={setPart} />,
    <GraduateCheckForm />,
  ];

  const procedureImgs: string[] = [Procedure1, Procedure2];

  return (
    <S.GraduateCheckBox>
      <S.GraduateCheckTitle>졸업생 인증</S.GraduateCheckTitle>
      <S.GraduateCheckMiddleWrap>
        {procedureImgs.map((procedure, idx) => {
          return (
            <React.Fragment key={idx}>
              {part === CONST.GraduatePartList[idx] && <GraduateCheckProcedure img={procedure} />}
            </React.Fragment>
          );
        })}
        <S.GraduateCheckFormsWrap>
          {compList.map((comp, idx) => {
            return (
              <React.Fragment key={idx}>
                {part === CONST.GraduatePartList[idx] && comp}
              </React.Fragment>
            );
          })}
        </S.GraduateCheckFormsWrap>
      </S.GraduateCheckMiddleWrap>
    </S.GraduateCheckBox>
  );
};

export default Graduate;
