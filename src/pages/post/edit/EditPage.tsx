import React from 'react';
import { useParams } from 'react-router';
import { TCategory } from '../../../models/common';
import PostWrite from '../../../components/common/postwrite/index';

const EditPage = () => {
  const { editfeed } = useParams();
  const type = editfeed as TCategory;

  return <PostWrite categoryType={type} />;
};

export default EditPage;
