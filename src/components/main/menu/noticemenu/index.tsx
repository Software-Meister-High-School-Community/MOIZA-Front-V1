import React, { useState, useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import NoticeItem from './NoticeItem';
import { INoticeListResponse } from '../../../../models/notice/response';
import { getNoticeList } from '../../../../utils/api/notice/index';

const NoticeMenu: React.FC = () => {
  const [noticeItem, setNoticeItem] = useState<INoticeListResponse[]>([]);

  useEffect(() => {
    getNoticeList()
      .then(res => {
        //setNoticeItem(res);
      })
      .catch();
  }, []);

  return (
    <S.Wrapper>
      <div>
        <S.NoticeHead>
          <S.StarName width="120px" height="35px" margin="0 210px 21px 0">
            공지사항
          </S.StarName>
          <Link to="/notice">
            <S.MoreBtn>더보기</S.MoreBtn>
          </Link>
        </S.NoticeHead>
        <S.HR width="380px" height="3px" background="#FFE199" />
        <S.NoticeList>
          {/*noticeItem && noticeItem.notice_list.map((item, index) => <NoticeItem />)*/}
        </S.NoticeList>
      </div>
    </S.Wrapper>
  );
};

export default NoticeMenu;
