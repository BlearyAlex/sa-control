import React from "react";
import { SideBar, TopBar } from "../components/utils";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Layout() {
  const { user, error } = useAuth({ middleware: "auth" });

  console.log(user);
  console.log(error);

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
