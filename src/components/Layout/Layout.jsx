import React, { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback={<RotatingLines/>}>
      <div>Layout</div>
      <Outlet/>
    </Suspense>
  );
};

export default Layout;
