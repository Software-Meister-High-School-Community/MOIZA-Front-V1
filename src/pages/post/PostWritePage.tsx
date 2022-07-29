import React from 'react';
import { useParams } from 'react-router';
import { TCategory, TWrite } from '../../models/common';
import PostWrite from '../../components/common/write';

const PostWritePage = () => {
  const { writefield } = useParams();
  const type = writefield as TCategory;
  const post = 'POST' as TWrite;

  return <PostWrite categoryType={type} postType={post} />;
};

export default PostWritePage;
