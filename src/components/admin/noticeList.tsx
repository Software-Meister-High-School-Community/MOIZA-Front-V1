import React, { useState, useEffect } from 'react';
import DropDown from '../common/select/dropdown';
import NoticeForm from '../common/form/noticeForm';
import { sortOptions } from '../common/select/dropdown/options';
import { INoticeListResponse } from '../../models/notice/response';
import { getNoticeList } from '../../utils/api/notice';
import { useRecoilState } from 'recoil';
import { adminPageNationState } from '../../store/admin';
import styled from 'styled-components';
import writeButtonIcon from '../../assets/img/common/writePen.svg';
import { Link } from 'react-router-dom';
import { INoticeListProps } from '../../utils/interface/Notice';

// NoticeList 더미 끝나면 바꾸기

const Notification: React.FC = () => {
  const [sort, setSort] = useState(sortOptions[0].option);
  const [noticeList, setNoticeList] = useState<INoticeListProps>();
  const [adminPageNation, setAdminPageNation] = useRecoilState(adminPageNationState);

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
    getNoticeList().then(res => {
      setNoticeList(ExampleData);
      setAdminPageNation({ ...adminPageNation, totalElement: res.total_count });
    });
  }, [sort, adminPageNation.page]);
  return (
    <section className="noticeListWrapper">
      <WriteNoticeButton>
        <Link to="/writeNotice">
          <img src={writeButtonIcon} alt="작성하기" />
        </Link>
      </WriteNoticeButton>
      <DropDown value={sort} onChangeValue={setSort} options={sortOptions} />
      {noticeList &&
        noticeList.notice_list.map((item, index) => <NoticeForm item={item} key={index} />)}
    </section>
  );
};
export default Notification;

const WriteNoticeButton = styled.button`
  position: fixed;
  top: 50%;
  right: 15px;
`;
