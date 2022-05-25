import React, { useState, useEffect } from 'react';
import DropDown from '../common/select/dropdown';
import NotificationList from './notificationBox';
import { NoticePropsType, noticeListTestArray } from './constant';
import { sortOptions } from '../common/select/dropdown/options';

const Notification = () => {
  const [value, setValue] = useState(sortOptions[0].option);
  const [noticeList, setNoticeList] = useState<NoticePropsType[]>([]);
  useEffect(() => {
    setNoticeList(noticeListTestArray);
  }, []);
  return (
    <section className="noticeListWrapper">
      <DropDown value={value} onChangeValue={setValue} options={sortOptions} />
      {noticeList.map((item, index) => (
        <NotificationList item={item} key={index} />
      ))}
    </section>
  );
};
export default Notification;
