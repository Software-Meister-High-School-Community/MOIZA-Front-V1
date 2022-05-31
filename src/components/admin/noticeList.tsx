import React, { useState, useEffect } from 'react';
import DropDown from '../common/select/dropdown';
import NoticeForm from '../common/form/noticeForm';
import { sortOptions } from '../common/select/dropdown/options';
import { INoticeListResponse } from '../../models/notice/response';
import { getNoticeList } from '../../utils/api/notice';

interface IProps {
  page: number;
  setTotalElementsCount: (page: number) => void;
}

const Notification: React.FC<IProps> = ({ page, setTotalElementsCount }) => {
  const [sort, setSort] = useState(sortOptions[0].option);
  const [noticeList, setNoticeList] = useState<INoticeListResponse>();
  useEffect(() => {
    getNoticeList().then(res => {
      setNoticeList(res);
      setTotalElementsCount(res.total_count);
    });
  }, [sort, page]);
  return (
    <section className="noticeListWrapper">
      <DropDown value={sort} onChangeValue={setSort} options={sortOptions} />
      {noticeList &&
        noticeList.notice_list.map((item, index) => <NoticeForm item={item} key={index} />)}
    </section>
  );
};
export default Notification;
