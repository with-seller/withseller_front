import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={PATH.MAIN} />
        <Route path={PATH.AUTH}>
          <Route path={PATH.LOGIN} />
          <Route path={PATH.SIGN_UP} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
