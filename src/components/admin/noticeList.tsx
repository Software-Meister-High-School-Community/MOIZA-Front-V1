import React, { useState, useEffect } from 'react';
import DropDown from '../common/select/dropdown';
import NoticeForm from '../common/form/noticeForm';
import { sortOptions } from '../common/select/dropdown/options';
import { INoticeListResponse } from '../../models/notice/response';
import { getNoticeList } from '../../utils/api/notice';
import { useRecoilState } from 'recoil';
import { adminPageNationState } from '../../store/admin';

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
      <DropDown value={sort} onChangeValue={setSort} options={sortOptions} />
      {noticeList &&
        noticeList.notice_list.map((item, index) => <NoticeForm item={item} key={index} />)}
    </section>
  );
};
export default Notification;
