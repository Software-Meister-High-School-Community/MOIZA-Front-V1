import React from 'react';
import { TCategory, TWrite } from '../../../models/common';
import PostWrite from '../../../components/common/write';

const TempUpdatePage = () => {
  const type = '임시저장 게시글 수정' as TCategory;
  const temp = 'TEMP' as TWrite;

  return <PostWrite categoryType={type} postType={temp} />;
};

export default TempUpdatePage;
