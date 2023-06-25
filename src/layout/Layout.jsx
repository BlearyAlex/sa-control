import React from 'react';
import { SideBar, TopBar } from '../components/utils';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <SideBar />
        <div className="p-7 flex-1 h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
