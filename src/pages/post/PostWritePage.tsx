import React from 'react';
import { useParams } from 'react-router';
import { TCategory } from '../../models/common';
import PostWrite from '../../components/common/postwrite';

const PostWritePage = () => {
  const { writefield } = useParams();
  const type = writefield as TCategory;

  return <PostWrite categoryType={type} />;
};

export default PostWritePage;
