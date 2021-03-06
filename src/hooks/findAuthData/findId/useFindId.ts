import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { IFindIdResultProps } from '../../../utils/interface/FindAuthData';
import { sendCertificationNumberStatus } from '../../../store/findAuthData/certificationStatus';

const useFindId = () => {
  const [idPart, setIdPart] = useState<string>('이메일 입력');
  const [email, setEmail] = useState<string>('');
  const [certificationNumber, setCertificationNumber] = useState<string>('');
  const [isSendNumber, setIsSendNumber] = useRecoilState(sendCertificationNumberStatus);
  const [result, setResult] = useState<IFindIdResultProps>();

  const goToCertification = useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      //certification api 통신
      setEmail('');
      setIdPart(e.target.name);
      setIsSendNumber({ ...isSendNumber, findIdSendNumber: true });
    },
    [setIsSendNumber],
  );

  const goToResult = useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      //certification 인증 통신
      const { name, id } = {
        name: '장정원',
        id: 'jangjang',
      };
      setResult({ name: name, resultId: id });
      setIsSendNumber({ ...isSendNumber, findIdSendNumber: false });
      setIdPart(e.target.name);
      setCertificationNumber('');
    },
    [setIsSendNumber],
  );

  return {
    idPart,
    email,
    setEmail,
    goToCertification,
    certificationNumber,
    setCertificationNumber,
    goToResult,
    result,
  };
};

export default useFindId;
