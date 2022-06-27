import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from './logo.svg';

interface Props {
  title?: string;
  keyword?: string;
  description?: string;
  imgSrc?: string;
  url?: string;
}

const SEOMetaTage: React.FC<Props> = ({
  title = '모이자',
  description = '소프트웨어마이스터고 커뮤니티',
  url = 'https://www.mo1za.com/',
  keyword = '소마고,소프트웨어마이스터고,커뮤니티,개발자,디자인,대덕소프트웨어마이스터고,광주소프트웨어마이스터고,대구소프트웨어마이스터고,미림정보여자고,부산소프트웨어마이스터고,프론트엔드,백엔드,iOS,안드로이드,정보보안,임베디드,인공지능,AI,FrontEnd,BackEnd,Android,소마고 모이자, 소프트웨어, 소프트웨어 고등학교, 1주년,정보 공유',
  imgSrc = logo,
}) => {
  return (
    <Helmet>
      <>
        <title>{title}</title>

        <meta name="title" content={title} />
        <meta name="keywords" content={keyword} />
        <meta name="description" content={description} />

        <meta name="og:description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:site_name" content={title} />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={imgSrc} />
        <meta name="og:type" content="website" />

        <link rel="canonical" href={url} />
      </>
    </Helmet>
  );
};
export default SEOMetaTage;
