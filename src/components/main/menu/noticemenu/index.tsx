import React, { useState, useEffect } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import NoticeItem from './NoticeItem';
import { INoticeListResponse } from '../../../../models/notice/response';
import { getNoticeList } from '../../../../utils/api/notice/index';
import { INoticeListProps } from '../../../../utils/interface/Notice';

const NoticeMenu: React.FC = () => {
  const [noticeItem, setNoticeItem] = useState<INoticeListProps>(); //INoticeListResPonse로 <> 바꾸기

  const ExampleData = {
    totla_count: 1,
    notice_list: [
      {
        title: '안녕하세요 모이자입니다.',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },
      {
        title: '안녕하세요 ',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },
      {
        title: '반가워요 여러분 저희는 모이자입니다',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },
      {
        title: '긴급 영구 정지 관련 공지사항',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },

      {
        title: '안녕하세요',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },
      {
        title: '모이자입니다 이번 해커톤의 우승팀은?',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },
      {
        title: '여러분 이번 공지사항은 이것입니다',
        content: '내용',
        created_at: '22/01/21  8:29',
        is_pinned: true,
      },
    ],
  };

  useEffect(() => {
    setNoticeItem(ExampleData);
    // getNoticeList()
    //   .then(res => {
    //     //setNoticeItem(res);
    //   })
    //   .catch();
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
          {noticeItem &&
            noticeItem.notice_list.map((item, index) => <NoticeItem item={item} key={index} />)}
        </S.NoticeList>
      </div>
    </S.Wrapper>
  );
};

export default NoticeMenu;
