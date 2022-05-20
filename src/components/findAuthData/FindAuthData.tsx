import React, { useEffect, useState } from 'react';
import * as S from './style';
import * as CONST from './constant/index';
import FindIdForm from './FindIdForm/FindIdForm';
import FindPwForm from './FindPwForm/FindPwForm';
import { useRecoilState } from 'recoil';
import { sendCertificationNumberStatus } from '../../store/FindAuthData/certificationStatus';
import CertificationAlert from './certificationAlert/CertificationAlert';

const FindAuthData: React.FC = () => {
  const [isSendNumber, setIsSendNumber] = useRecoilState(sendCertificationNumberStatus);

  //default는 findid 페이지
  const [tab, setTab] = useState('아이디 찾기');

  useEffect(() => {
    setIsSendNumber(prev => ({
      ...prev,
      findIdSendNumber: false,
      findPwSendNumber: false,
    }));
  }, [setIsSendNumber]);

  const SendNumberStatus = isSendNumber.findIdSendNumber || isSendNumber.findPwSendNumber;

  return (
    <S.FindAuthDataBox>
      {SendNumberStatus ? (
        <CertificationAlert />
      ) : (
        <S.FindAuthDataTitle>아이디 / 비밀번호 찾기</.FindAuthDataTitle>
      )}
      <S.FindAuthDataFormWrap>
        <>
          {!SendNumberStatus && (
            <S.FindAuthDataTabWrap>
              {CONST.FindAuthDataKind.map((item, index) => {
                return (
                  <S.FindAuthDataTab
                    seleted={item.title === tab}
                    onClick={() => {
                      setTab(item.title);
                    }}
                    key={index}
                  >
                    {item.title}
                  </S.FindAuthDataTab>
                );
              })}
            </S.FindAuthDataTabWrap>
          )}
        </>
        <>{tab === '아이디 찾기' && <FindIdForm setTab={setTab} />}</>
        <>{tab === '비밀번호 찾기' && <FindPwForm />}</>
      </S.FindAuthDataFormWrap>
    </S.FindAuthDataBox>
  );
};

export default FindAuthData;
