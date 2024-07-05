import { Outlet } from 'react-router-dom';
//mark the place child element must be render to

import MainNavigation from '../components/MainNavigation';


function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;