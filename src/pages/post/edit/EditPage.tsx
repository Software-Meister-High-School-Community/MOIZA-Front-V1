import React from 'react';
import { useParams } from 'react-router';
import { TCategory, TWrite } from '../../../models/common';
import PostWrite from '../../../components/common/write';

const EditPage = () => {
  const { editfeed } = useParams();
  const type = editfeed as TCategory;
  const edit = 'EDIT' as TWrite;

  return <PostWrite categoryType={type} postType={edit} />;
};

export default EditPage;
