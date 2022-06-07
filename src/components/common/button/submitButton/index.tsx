import React from 'react';
import { ISubmitButtonProps } from '../../../../utils/interface/common';
import * as S from './style';

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  big,
  text,
  handleClick,
  disable,
  yellow,
  blue,
  name,
}) => {
  return (
    <S.SubmitButtonBox
      className="submitButtonBox"
      big={big}
      disabled={disable}
      onClick={handleClick}
      yellow={yellow}
      blue={blue}
      name={name}
    >
      {text}
    </S.SubmitButtonBox>
  );
};

export default SubmitButton;
