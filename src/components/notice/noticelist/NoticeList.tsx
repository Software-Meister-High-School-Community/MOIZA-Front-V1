import React, { useState } from 'react';
import * as S from './style';
import Path from '../../common/path';
import { noticeListPathArr } from '../constants';
import Dropdown from '../../common/select/dropdown';
import NoticePost from '../noticePost/NoticePost';
import PagiNation from '../../common/pagination/Pagination';
import { sortOptions } from '../../common/select/dropdown/options';

const NoticeList: React.FC = () => {
  const [value, setValue] = useState(sortOptions[0].option);
  const [pagenation, setPagenation] = useState(1);

  return (
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={noticeListPathArr} />
        <S.NoticeNameDiv>
          <S.NoticeName>공지사항</S.NoticeName>
        </S.NoticeNameDiv>
      </S.NoticeHeadDiv>
      <S.PostDiv>
        <S.SelectDiv>
          <Dropdown value={value} onChangeValue={setValue} options={sortOptions} />
        </S.SelectDiv>
        <S.Post>
          <NoticePost />
        </S.Post>
        <nav className="pagenation">
          <PagiNation total={5} limit={1} page={pagenation} setPage={setPagenation} />
        </nav>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default NoticeList;
