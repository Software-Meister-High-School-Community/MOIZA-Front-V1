import React from 'react';
import { useParams } from 'react-router';
import { TCategory } from '../../../models/common';
import EditPost from '../../../components/post/editpost';

const EditPage = () => {
  const { editfeed } = useParams();
  const type = editfeed as TCategory;

  return <EditPost categoryType={type} />;
};

export default EditPage;
