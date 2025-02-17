import React from "react";
import "./css/GraphComponent.css";
import LineChart from "./LineChart";

const GraphComponent = () => {
  return (
    <div className="container db-graph">
      <h2>Sales Details</h2>
      <div className="graph">
        <LineChart />
      </div>
    </div>
  );
};

export default GraphComponent;
