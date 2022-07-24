import React from 'react';
import { useParams } from 'react-router';
import { TCategory } from '../../../models/common';
import UpdateTemp from '../../../components/post/temporary/edittemp';

const TempUpdatePage = () => {
  const { editTemprory } = useParams();
  const type = editTemprory as TCategory;

  return <UpdateTemp categoryType={type} />;
};

export default TempUpdatePage;
