import React, { useMemo } from 'react';
import './App.css';
import Router from './router';
import { isAndroid, isIOS } from 'react-device-detect';
import IsMobileAccess from './pages/isMobileAccess';

function App() {
  const isMobile = true;
  const router = useMemo(() => {
    if (isMobile) {
      return <IsMobileAccess />;
    } else {
      return <Router />;
    }
  }, [isMobile, isAndroid, isIOS]);
  return router;
}

export default App;
