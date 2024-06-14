import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback={<div>'Loading...'</div>}>
      <div>Layout</div>
      <Outlet/>
    </Suspense>
  );
};

export default Layout;
