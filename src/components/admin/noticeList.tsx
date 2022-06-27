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

const Notification: React.FC = () => {
  const [sort, setSort] = useState(sortOptions[0].option);
  const [noticeList, setNoticeList] = useState<INoticeListResponse>();
  const [adminPageNation, setAdminPageNation] = useRecoilState(adminPageNationState);
  useEffect(() => {
    getNoticeList().then(res => {
      setNoticeList(res);
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
