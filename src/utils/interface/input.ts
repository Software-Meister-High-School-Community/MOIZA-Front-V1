import React, { Dispatch, SetStateAction } from 'react';
import { IEyeButtonProps } from './common';

export interface ITextInputProps extends IEyeButtonProps {
  width?: string;
  margin?: string;
  type: 'text' | 'password' | 'number';
  value: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;

  //그냥 setState 할때는 타입을 아직 지정 못함
}
