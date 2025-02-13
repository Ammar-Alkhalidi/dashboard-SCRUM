import React from "react";
import "./SideNav.css"; // Falls eine CSS-Datei existiert
import { NavLink } from "react-router-dom";
import Gauge from "../assets/icons/gauge-high.svg?react";
import BorderAll from "../assets/icons/border-all.svg?react";
import ListCheck from "../assets/icons/list-check.svg?react";
import Boxes from "../assets/icons/boxes-stacked.svg?react";
import Clipboard from "../assets/icons/clipboard.svg?react";
import People from "../assets/icons/people-group.svg?react";

const SideNav = () => {
  const sideNavItems = [
    { id: 1, name: "Dashboard", to: "/", iconComp: Gauge },
    { id: 2, name: "Products", to: "/products", iconComp: BorderAll },
    { id: 3, name: "Order List", to: "/order-list", iconComp: ListCheck },
    { id: 4, name: "Product Stock", to: "/product-stock", iconComp: Boxes },
    { id: 5, name: "To-Do", to: "/to-do", iconComp: Clipboard },
    { id: 6, name: "Team", to: "/team", iconComp: People },
  ];

  return (
    <div className="side-nav">
      <div className="logo">
        <h1>
          <span>Dash</span>Stack
        </h1>
      </div>
      <ul className="sidenav-list">
        {sideNavItems.map((sni) => (
          <li className="nav-item" key={sni.id}>
            <NavLink className="nav-link" to={sni.to}>
             <sni.iconComp className="nav-icon" /> {sni.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
