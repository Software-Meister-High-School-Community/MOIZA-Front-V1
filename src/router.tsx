import React, { useEffect } from 'react';
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
import PostReplyPage from './pages/postReply/PostReplyPage';
import PostWrite from './pages/post/PostWritePage';
import Follow from './pages/follow';
import TempList from './components/post/temporary';
import EditProfile from './components/editProfile';
import ProfilePage from './pages/profile';
import MyPage from './pages/mypage';
import NotFoundPage from './pages/404';
import SEOMetaTage from './SEOMetaTage';
import WriteNotice from './components/admin/writeNotice';
import CommunityCategoryPage from './pages/category/communityCategoryPage';
import TempUpdatePage from './pages/post/temprory/TempUpdatePage';
import EditPage from './pages/post/edit/EditPage';

const Router = () => {
  useEffect(() => {
    if (!localStorage.getItem('auto_login')) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }, []);
  return (
    <BrowserRouter>
      <SEOMetaTage />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroducePage />} />
        <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path=":managementType" element={<Admin />} />
        </Route>
        <Route path="notice">
          <Route path=":noticelist" element={<NoticeList />} />
          <Route path=":writeNotice" element={<WriteNotice />} />
          <Route path=":shownotice/:noticeId" element={<ShowNotice />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />
        <Route path="/graduatecheck" element={<GraduateCheckPage />} />
        <Route path="/graduatechecksuccess" element={<GraduateCheckSuccess />} />
        <Route path="/findauthdata" element={<FindAuthDataPage />} />
        <Route path="/search">
          <Route index element={<SearchPage />} />
          <Route path=":keyword" element={<ResultPage />} />
        </Route>
        <Route path="/category">
          <Route index element={<CategoryPage />} />
          <Route path=":categoryType" element={<CommunityCategoryPage />} />
          <Route path=":categoryType/:feedId" element={<PostReplyPage />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/profile">
          <Route path=":userId" element={<ProfilePage />} />
          <Route path=":userId/:followType" element={<Follow />} />
        </Route>
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="/feeds">
          <Route path=":writefield" element={<PostWrite />} />
          <Route path=":editfeed" element={<EditPage />} />
        </Route>
        <Route path="temprory">
          <Route path=":templist" element={<TempList />} />
          <Route path=":tempfield/:tempid" element={<TempUpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
