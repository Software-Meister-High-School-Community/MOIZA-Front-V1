import React from 'react';
import { ITextInputProps } from '../../../../utils/interface/input';
import Index from '../../button/eyeButton';
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
      {type === 'password' && <Index isShow={isShow} onClick={onClick} left={left} />}
    </S.TextInputWrap>
  );
};

export default React.memo(TextInput);
