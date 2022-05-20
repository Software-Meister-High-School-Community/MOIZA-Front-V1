import React from 'react';
import { ITextInputProps } from '../../../../interface/Common/Input/Input.type';
import EyeButton from '../../Button/EyeButton/EyeButton';
import * as S from './style';

const TextInput: React.FC<ITextInputProps> = ({
  width,
  margin,
  type,
  value,
  name,
  placeholder,
  disabled,
  setValue,
  left,
  isShow,
  onClick,
}) => {
  return (
    <S.TextInputWrap margin={margin} width={width}>
      <S.TextInputInput
        type={type === 'text' ? 'text' : isShow ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e)}
        disabled={disabled}
      />
      {type === 'password' && <EyeButton isShow={isShow} onClick={onClick} left={left} />}
    </S.TextInputWrap>
  );
};

export default React.memo(TextInput);
