import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        {/*<Route path={PATH.AUTH}>*/}
        {/*  <Route path={PATH.LOGIN} />*/}
        {/*  <Route path={PATH.SIGN_UP} />*/}
        {/*</Route>*/}
      </Routes>
    </Suspense>
  );
}

export default App;
