import React from 'react';
import { IReportedUser } from '../../../../../models/admin/response';
import UserBox from './userBox';

interface IProps {
  item: IReportedUser[];
}

const ReportOfUser: React.FC<IProps> = ({ item }) => {
  return (
    <>
      {item.map(i => (
        <UserBox i={i} />
      ))}
    </>
  );
};

export default ReportOfUser;
