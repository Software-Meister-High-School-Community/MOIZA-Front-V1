import React from 'react';
import Category from '../../components/category';
import SEOMetaTage from '../../SEOMetaTage';

const CategoryPage: React.FC = () => {
  return (
    <>
      <SEOMetaTage title="모이자-게시물 카테고리" />
      <Category />
    </>
  );
};

export default CategoryPage;
