import React, { useState } from 'react';
import onHeart from '../../../../assets/img/common/onHeart.svg';
import offHeart from '../../../../assets/img/common/offHeart.svg';
import styled from 'styled-components';
import { Like, DeleteLike } from '../../../../utils/api/feeds/index';

interface Props {
  feedId: number;
}

export const HeartButton: React.FC<Props> = ({ feedId }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const onClickHeart = () => {
    if (liked === false) {
      setLiked(true);
      Like(feedId);
    } else {
      setLiked(false);
      DeleteLike(feedId);
    }
  };
  return <PostHeart src={liked ? onHeart : offHeart} alt="" onClick={onClickHeart} />;
};

const PostHeart = styled.img`
  cursor: pointer;
`;

export default HeartButton;
