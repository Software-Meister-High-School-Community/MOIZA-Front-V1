import React, { useState } from 'react';
import { IRadioButtonProps } from '../../../../utils/interface/common';
import * as S from './style';

const RadioButton: React.FC<IRadioButtonProps> = ({ name, radioArray, setSelected, selected }) => {
  return (
    <S.Radios className="radios">
      {radioArray.map(item => (
        <S.Wrapper>
          <S.RadioButtonRect>
            <S.RadioButtonBox
              onChange={() => setSelected(item.id)}
              type="radio"
              name={name}
              checked={selected === item.id}
              key={item.id}
            />
          </S.RadioButtonRect>
          <p>{item.summary}</p>
        </S.Wrapper>
      ))}
    </S.Radios>
  );
};

export default RadioButton;
