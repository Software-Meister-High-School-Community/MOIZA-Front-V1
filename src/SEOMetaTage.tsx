import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title?: string;
  keyword?: string;
  description?: string;
  imgSrc?: string;
  url?: string;
}

const SEOMetaTage: React.FC<Props> = props => {
  return (
    <Helmet>
      <>
        <title>{props.title}</title>

        <meta name="title" content={props.title} />
        <meta name="keywords" content={props.keyword} />
        <meta name="description" content={props.description} />

        <meta name="og:description" content={props.description} />
        <meta name="og:title" content={props.title} />
        <meta name="og:site_name" content={props.title} />
        <meta name="og:url" content={props.url} />
        <meta name="og:image" content={props.imgSrc} />
        <meta name="og:type" content="website" />

        <link rel="canonical" href={props.url} />
      </>
    </Helmet>
  );
};
export default SEOMetaTage;
