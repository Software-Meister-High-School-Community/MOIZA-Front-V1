import React, { useEffect, useState } from 'react';
import * as S from './style';
import Path from '../../common/path';
import { noticeListPathArr } from '../constant';
import Dropdown from '../../common/select/dropdown';
import PagiNation from '../../common/pagenation';
import { sortOptions } from '../../common/select/dropdown/options';
import { INoticeListResponse } from '../../../models/notice/response';
import NoticeForm from '../../common/form/noticeForm';
import { INoticeListProps } from '../../../utils/interface/Notice';
import { Link } from 'react-router-dom';

// 더미데이터 끝나고 Response로 바꾸기

const NoticeList: React.FC = () => {
  const [value, setValue] = useState(sortOptions[0].option);
  const [pagenation, setPagenation] = useState(1);
  const [noticeList, setNoticeList] = useState<INoticeListProps>();

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
    setNoticeList(ExampleData);
  }, []);

  return (
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={noticeListPathArr} />
        <S.NoticeNameDiv>
          <S.NoticeName>공지사항</S.NoticeName>
        </S.NoticeNameDiv>
      </S.NoticeHeadDiv>
      <S.PostDiv>
        <S.Post>
          {noticeList?.notice_list.map((item, index) => (
            <Link to="/shownotice">
              <NoticeForm item={item} key={index} />
            </Link>
          ))}
        </S.Post>
        <nav className="pagenation">
          <PagiNation total={5} limit={1} page={pagenation} setPage={setPagenation} />
        </nav>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default NoticeList;
