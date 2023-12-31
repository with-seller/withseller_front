import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        {/*<Route path={PATH.AUTH}>*/}
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.SIGN_UP} element={<SignupPage />} />
        {/*</Route>*/}
      </Routes>
    </Suspense>
  );
}

export default App;
