import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/mainpage/mainpage';
import IntroducePage from './pages/introduce';
import NoticeList from './components/admin/noticeList';
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
import MyPage from './pages/mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/shownotice" element={<ShowNotice />} />
        <Route path="/admin" element={<Admin />} />
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
        <Route path="/follow/:userid" element={<Follow />} />
        <Route path="/profile/:userid" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/templist/:tempfield" element={<TempList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
