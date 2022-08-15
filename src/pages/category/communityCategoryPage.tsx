import React from 'react';
import PostList from '../../components/post/postlist';
import { useParams } from 'react-router';
import { useEffect, useMemo } from 'react';
import { TCategory } from '../../models/common';
import { categoryIdList, categoryList } from '../../components/post/constant';
import useException from '../../hooks/useException';
import SEOMetaTage from '../../SEOMetaTage';

const CommunityCategoryPage = () => {
  const { categoryType } = useParams();
  const { moveTo404Page } = useException();
  const type = categoryType as TCategory;

  useEffect(() => {
    if (!categoryIdList.includes(type)) moveTo404Page();
  }, [categoryType, type]);

  const categoryName = useMemo(() => {
    const index = categoryList.findIndex(item => item.id === categoryType);
    if (index === -1) return '';
    return categoryList[index].summary;
  }, [categoryType]);
  return (
    <>
      <SEOMetaTage title={`모이자-${categoryName} 커뮤니티`} />
      <PostList categoryName={categoryName} categoryType={type} />
    </>
  );
};
export default CommunityCategoryPage;
