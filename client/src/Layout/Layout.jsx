import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
      <SideNav />
    </>
  );
};

export default Layout;
