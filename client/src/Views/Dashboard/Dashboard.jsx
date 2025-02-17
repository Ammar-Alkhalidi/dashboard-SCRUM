import React from "react";
import "./Dashboard.css";
import UserIcon from "../../assets/icons/icon-users.svg?react";
import OrderIcon from "../../assets/icons/icon-orders.svg?react";
import SalesIcon from "../../assets/icons/icon-sales.svg?react";
import PendingIcon from "../../assets/icons/icon-pending.svg?react";
import MetaCard from "./Components/MetaCard";
import GraphComponent from "./Components/GraphComponent";
import DealDetails from "./Components/DealDetails";

const Dashboard = () => {
  const dashboardMeta = [
    {
      name: "Total User",
      value: 40689,
      yesterday: 38231,
      str: "yesterday",
      icon: <UserIcon className="meta-card-icon" />,
      classname: "total-user",
    },
    {
      name: "Total Order",
      value: 10293,
      yesterday: 9823,
      str: "past week",
      icon: <OrderIcon className="meta-card-icon" />,
      classname: "total-order",
    },
    {
      name: "Total Sales",
      value: 89000,
      yesterday: 92000,
      str: "yesterday",
      icon: <SalesIcon className="meta-card-icon" />,
      classname: "total-sales",
    },
    {
      name: "Total Pending",
      value: 2040,
      yesterday: 2000,
      str: "yesterday",
      icon: <PendingIcon className="meta-card-icon" />,
      classname: "total-pending",
    },
  ];
  return (
    <section className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        {dashboardMeta.map((item) => {
          return (
            <MetaCard
              name={item.name}
              value={item.value}
              yesterday={item.yesterday}
              str={item.str}
              iconComp={item.icon}
              classname={item.classname}
              key={item.name}
            />
          );
        })}

        <GraphComponent />
        <DealDetails />
      </div>
    </section>
  );
};

export default Dashboard;
