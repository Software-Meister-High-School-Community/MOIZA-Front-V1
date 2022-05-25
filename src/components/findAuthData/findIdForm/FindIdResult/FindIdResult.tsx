import React from 'react';
import { IFindIdResultProps } from '../../../../utils/interface/FindAuthData';
import * as S from './FindIdResult.style';

const FindIdResult: React.FC<IFindIdResultProps> = ({ name, resultId }) => {
  return (
    <>
      <S.FindIdResultTextWrap>
        <S.FindIdResultGuideText>
          <strong>{name}</strong> 님의 정보와 일치하는 아이디입니다.
        </S.FindIdResultGuideText>
        <S.FindIdResultIdText>{resultId}</S.FindIdResultIdText>
      </S.FindIdResultTextWrap>
    </>
  );
};

export default React.memo(FindIdResult);
