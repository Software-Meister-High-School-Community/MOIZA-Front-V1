import React from 'react';
import { useParams } from 'react-router';
import { TCategory } from '../../../models/common';
import PostWrite from '../../../components/common/postwrite/index';

const TempUpdatePage = () => {
  const { editTemprory } = useParams();
  const type = editTemprory as TCategory;

  return <PostWrite categoryType={type} />;
};

export default TempUpdatePage;
