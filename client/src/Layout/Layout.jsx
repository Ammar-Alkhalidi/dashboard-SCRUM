import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideNav />
      <div className="main-content">
        <TopNav />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
