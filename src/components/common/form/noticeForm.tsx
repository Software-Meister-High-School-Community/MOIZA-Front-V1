import { useState, useMemo } from 'react';
import styled from 'styled-components';
import fixed from '../../../assets/img/notice/fixedNotification.svg';
import unFixed from '../../../assets/img/notice/notification.svg';
import seeMore from '../../../assets/img/common/seeMoreBtnIcon.svg';
import SeeMoreModal from '../seeMoreModal';
import { seeMoreOptionList } from '../../admin/constant';
import { dateTransform } from '../../../utils/function/dateTransform';
import { useUserInfo } from '../../../hooks/user/useUserInfo';
import { INoticeResponse } from '../../../models/notice/response';

const NoticeForm: React.FC<{ item: INoticeResponse }> = ({ item }) => {
  const [seeMoreModal, setSeeMoreModal] = useState(false);
  const { userInfo } = useUserInfo();
  // const is_admin = useMemo(() => {
  //   return userInfo.user_scope === 'ADMIN';
  // }, [userInfo]);
  const closeModal = () => {
    setSeeMoreModal(false);
  };
  const is_admin = true;
  const date = dateTransform(item.created_at);
  return (
    <List fixed={item.is_pinned}>
      <img src={item.is_pinned ? fixed : unFixed} alt="fixed?" />
      <h1>{item.title}</h1>
      <Date>{date}</Date>
      {is_admin && (
        <SeeMore onClick={() => setSeeMoreModal(true)}>
          <img src={seeMore} alt="더보기" />
          {seeMoreModal && <SeeMoreModal optionList={seeMoreOptionList} closeModal={closeModal} />}
        </SeeMore>
      )}
    </List>
  );
};
export default NoticeForm;

const List = styled.li<{
  fixed: boolean;
}>`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 23px 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  align-items: center;
  > h1 {
    margin-left: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${props => (props.fixed ? '#FFB500' : '#555555')};
  }
`;
const Date = styled.em`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #999999;
  margin-left: auto;
`;
const SeeMore = styled.button`
  display: flex;
  margin-left: 30px;
  position: relative;
  cursor: pointer;
  > div > .seeMoreModal {
    position: absolute;
    top: 24px;
    right: 0;
  }
`;
