import React from 'react';
import Slide from '../../components/main/slide';
import MainMenu from '../../components/main/menu/MainMenu';
import ErrorBoundary from '../../components/ErrorBoundary';

const MainPage: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Slide />
        <MainMenu />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
