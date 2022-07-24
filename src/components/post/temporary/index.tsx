import React, { useState, useEffect } from 'react';
import TempPost from './temppost';
import * as S from './style';
import { getTemporariesFeedList } from '../../../utils/api/feeds/index';
import { IGetTemporariesFeedListResponse } from '../../../models/feeds/response';

const TempList: React.FC = () => {
  const [tempList, setTempList] = useState<IGetTemporariesFeedListResponse>();

  useEffect(() => {
    /*
    getTemporariesFeedList()
      .then(res => {
        setTempList(res);
      })
      .catch();
    */
  }, []);

  return (
    <S.Wrapper>
      <S.Title>
        <p>임시저장 게시물</p>
      </S.Title>
      <S.ListDiv>{tempList && tempList.feed_list.map((item, index) => <TempPost />)}</S.ListDiv>
    </S.Wrapper>
  );
};

export default TempList;
