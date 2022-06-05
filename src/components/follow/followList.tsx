import React, { useState, useMemo, useEffect } from 'react';
import FollowListType from './followListType';
import FollowCard from './followCard';
import { getFollowerList, getFollowingList } from '../../utils/api/follow';
import { IFollow } from '../../models/follow/response';
import { useRecoilValue } from 'recoil';
import { followOwnerState } from '../../store/follow/followOwner';

interface IFollowState {
  follower: IFollow[];
  following: IFollow[];
}

const UserList: React.FC = () => {
  const [followList, setFollowList] = useState<IFollowState>();
  const { id, followType } = useRecoilValue(followOwnerState);
  useEffect(() => {
    getFollowerList(id).then(res =>
      setFollowList({ ...followList, follower: res.follower_user_list } as IFollowState),
    );
    getFollowingList(id).then(res =>
      setFollowList({ ...followList, following: res.following_user_list } as IFollowState),
    );
  }, [id, setFollowList, followList]);
  const followCount = useMemo(() => {
    if (followList)
      return {
        follower: followList.follower.length,
        following: followList.following.length,
      };
    return {
      follower: 0,
      following: 0,
    };
  }, [followList]);
  const list = useMemo(() => {
    if (followType === 'following' && followList)
      return followList.following.map(item => <FollowCard followInfo={item} key={item.user_id} />);
    else if (followType === 'follower' && followList)
      return followList.follower.map(item => <FollowCard followInfo={item} key={item.user_id} />);
  }, [followList, followType]);
  return (
    <ul>
      <FollowListType followCount={followCount} />
      {list}
    </ul>
  );
};
export default UserList;
