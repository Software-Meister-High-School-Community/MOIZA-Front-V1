import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/mainpage/mainpage';
import IntroducePage from './pages/introduce';
import NoticeList from './components/notice/noticelist/index';
import ShowNotice from './components/notice/shownotice';
import Admin from './components/admin';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import SignupSuccess from './components/signup/signupSuccess';
import GraduateCheckPage from './pages/graduateCheck';
import GraduateCheckSuccess from './components/graduateCheck/graduateCheckSuccess';
import FindAuthDataPage from './pages/findId';
import CategoryPage from './pages/category/CategoryPage';
import SearchPage from './pages/search/SearchPage';
import ResultPage from './pages/result/ResultPage';
import PostList from './components/post/postlist';
import PostReplyPage from './pages/postReply/PostReplyPage';
import PostWrite from './components/post/postwrite';
import Follow from './pages/follow';
import TempList from './components/post/temporary';
import EditProfile from './components/editProfile';
import ProfilePage from './pages/profile';
import MyPage from './pages/mypage';
import NotFoundPage from './pages/404';
import SEOMetaTage from './SEOMetaTage';

const Router = () => {
  return (
    <BrowserRouter>
      <SEOMetaTage
        title="모이자"
        description="소프트웨어마이스터고 커뮤니티"
        url="https://www.mo1za.com/"
        keyword="소마고,소프트웨어마이스터고,커뮤니티,모이자,개발자,디자인,대덕 소프트웨어마이스터고,광주 소프트웨어마이스터고,대구 소프트웨어마이스터고,미림 정보여자고,부산 소프트웨어마이스터고,프론트엔드,백엔드,iOS,안드로이드,AOS,정보보안,임베디드,인공지능,AI,FrontEnd,BackEnd,고등학생,소프트웨어,마이스터고"
      />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/shownotice" element={<ShowNotice />} />
        <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path=":managementType" element={<Admin />} />
        </Route>
        {/*<Route path="/write-notice" element={<WriteNotice />} />*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />
        <Route path="/graduatecheck" element={<GraduateCheckPage />} />
        <Route path="/graduatechecksuccess" element={<GraduateCheckSuccess />} />
        <Route path="/findauthdata" element={<FindAuthDataPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result/:title" element={<ResultPage />} />
        <Route path="/list/:listname" element={<PostList />} />
        <Route path="/list/:listname/:postid" element={<PostReplyPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/postwrite/:writefield" element={<PostWrite />} />
        <Route path="/profile">
          <Route path=":userId" element={<ProfilePage />} />
          <Route path=":userId/:followType" element={<Follow />} />
        </Route>
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/templist/:tempfield" element={<TempList />} />
        <Route path="404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
