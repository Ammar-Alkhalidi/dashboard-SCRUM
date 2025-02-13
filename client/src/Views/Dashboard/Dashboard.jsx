import React from "react";
import "./Dashboard.css";
import UserGroup from "../../assets/icons/user-group.svg?react";
import Box from "../../assets/icons/box.svg?react";
import ChartLine from "../../assets/icons/chart-line.svg?react";
import ClockLeft from "../../assets/icons/clock-rotate-left.svg?react";
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
      icon: <UserGroup className="meta-card-icon" />,
      classname: "total-user",
    },
    {
      name: "Total Order",
      value: 10293,
      yesterday: 9823,
      str: "past week",
      icon: <Box className="meta-card-icon" />,
      classname: "total-order",
    },
    {
      name: "Total Sales",
      value: 89000,
      yesterday: 92000,
      str: "yesterday",
      icon: <ChartLine className="meta-card-icon" />,
      classname: "total-sales",
    },
    {
      name: "Total Pending",
      value: 2040,
      yesterday: 2000,
      str: "yesterday",
      icon: <ClockLeft className="meta-card-icon" />,
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
