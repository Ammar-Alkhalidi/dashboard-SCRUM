import React from "react";
import "./TopNav.css";
import Bars from "../assets/icons/bars.svg?react";
import MagGlass from "../assets/icons/magnifying-glass.svg?react";
import Bell from "../assets/icons/bell.svg?react";
import UKFlag from "../assets/icons/uk-flag.svg?react";
import PP from "../assets/pp.jpg";
import ChevDown from "../assets/icons/chevron-down.svg?react";

const TopNav = () => {
  return (
    <header className="top-nav">
      <div className="left">
        <Bars className="tn-icon" />
        <div className="search-container">
          <MagGlass className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <Bell className="tn-icon" />
        <div className="lang-select">
          <UKFlag className="flag-icon" />
          <select name="lang" id="lang">
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </div>
        <div className="acc-menu">
          <div className="profile-pic">
            <img src={PP} alt="Profile-Picture" />
          </div>
          <div className="acc-name">
            <p className="name">Moni Roy</p>
            <p className="role">Admin</p>
          </div>
          <div className="icon-wrapper">
              <ChevDown className="tn-icon"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
