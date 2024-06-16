import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<RotatingLines />}>
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};

export default Layout;
