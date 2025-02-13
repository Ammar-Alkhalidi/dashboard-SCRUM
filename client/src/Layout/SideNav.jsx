import React from "react";
import "./SideNav.css"; // Falls eine CSS-Datei existiert
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const sideNavItems = [
    { id: 1, name: "Dashboard", to: "/" },
    { id: 2, name: "Products", to: "/products" },
    { id: 3, name: "Order List", to: "/order-list" },
    { id: 4, name: "Product Stock", to: "/product-stock" },
    { id: 5, name: "To-Do", to: "/to-do" },
    { id: 6, name: "Team", to: "/team" },
  ];

  return (
    <div className="side-nav">
      <ul className="sidenav-list">
        {sideNavItems.map((sni) => (
          <li className="nav-item" key={sni.id}>
            <NavLink to={sni.to}>{sni.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
