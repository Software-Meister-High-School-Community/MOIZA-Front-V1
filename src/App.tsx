import React, { useMemo } from 'react';
import './App.css';
import Router from './router';
import { isMobile } from 'react-device-detect';
import IsMobileAccess from './pages/isMobileAccess';

function App() {
  const router = useMemo(() => {
    if (isMobile) {
      return <IsMobileAccess />;
    } else {
      return <Router />;
    }
  }, [isMobile]);
  return router;
}

export default App;
