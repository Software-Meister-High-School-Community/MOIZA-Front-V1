import React from 'react';
import * as S from './style';

const SignupProcedure: React.FC<{ img: string }> = ({ img }) => {
  return <S.SignupProcedureBox src={img} />;
};

export default SignupProcedure;
