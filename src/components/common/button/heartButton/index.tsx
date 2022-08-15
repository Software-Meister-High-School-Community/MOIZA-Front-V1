import React, { useState } from 'react';
import onHeart from '../../../../assets/img/common/onHeart.svg';
import offHeart from '../../../../assets/img/common/offHeart.svg';
import styled from 'styled-components';
import { like, deleteLike } from '../../../../utils/api/feeds/index';

interface Props {
  feedId: number;
}

export const HeartButton: React.FC<Props> = ({ feedId }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const onClickHeart = () => {
    if (!liked) {
      setLiked(true);
      like(feedId);
    } else {
      setLiked(false);
      deleteLike(feedId);
    }
  };
  return <PostHeart src={liked ? onHeart : offHeart} alt="" onClick={onClickHeart} />;
};

const PostHeart = styled.img`
  cursor: pointer;
`;

export default HeartButton;
