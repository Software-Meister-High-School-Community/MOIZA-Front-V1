import React, { useState } from 'react';
import onHeart from '../../../../assets/img/common/onHeart.svg';
import offHeart from '../../../../assets/img/common/offHeart.svg';
import styled from 'styled-components';
import { Like, DeleteLike } from '../../../../utils/api/feeds/index';

export const HeartButton: React.FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const onClickHeart = () => {
    if (liked === false) {
      setLiked(true);
      console.log('like');
    } else {
      setLiked(false);
      console.log('Not like');
    }
  };
  return <PostHeart src={liked ? onHeart : offHeart} alt="" onClick={onClickHeart} />;
};

const PostHeart = styled.img`
  cursor: pointer;
`;

export default HeartButton;
