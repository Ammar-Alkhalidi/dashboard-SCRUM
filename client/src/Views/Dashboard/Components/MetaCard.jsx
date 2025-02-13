import React from "react";
import "./css/MetaCard.css";
import TrendUp from "../../../assets/icons/arrow-trend-up.svg?react";
import TrendDown from "../../../assets/icons/arrow-trend-down.svg?react";

const MetaCard = ({ name, value, yesterday, str, iconComp, classname }) => {
  const growthRate = ((value - yesterday) / yesterday) * 100;
  const isPositive = growthRate > 0;

  const formattedValue =
    name === "Total User"
      ? value.toLocaleString("en-US")
      : name === "Total Sales"
      ? `$${value.toLocaleString("en-US")}`
      : value;

  return (
    <div className={`container meta-card ${classname}`}>
      <p className="title">{name}</p>
      <p className="value">{formattedValue}</p>
      <p className="compare-string">
        {isPositive ? (
          <TrendUp className="meta-card-trend-ic trend-up" />
        ) : (
          <TrendDown className="meta-card-trend-ic trend-down" />
        )}
        <span className={`growth-rate ${isPositive ? "pos" : "neg"}`}>
          {Math.abs(growthRate).toFixed(1)}%
        </span>
        {` ${isPositive ? "up" : "down"} from ${str}`}
      </p>
      {iconComp}
    </div>
  );
};

export default MetaCard;
