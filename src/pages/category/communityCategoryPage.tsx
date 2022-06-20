import PostList from '../../components/post/postlist';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { TCategory } from '../../models/common';
import { categoryList } from '../../components/post/constant';
import useException from '../../hooks/useException';

const CommunityCategoryPage = () => {
  const { categoryType } = useParams();
  const { moveTo404Page } = useException();
  const type = categoryType as TCategory;
  useEffect(() => {
    const list = categoryList.map(item => {
      return item.id;
    });
    if (!list.includes(type)) moveTo404Page();
  }, [categoryType]);
  return <PostList categoryType={type} />;
};
export default CommunityCategoryPage;
