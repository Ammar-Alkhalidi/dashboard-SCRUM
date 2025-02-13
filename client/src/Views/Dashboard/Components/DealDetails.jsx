import React from "react";
import "./css/DealDetails.css";
import { useOrders } from "../../../Contexts/OrderProvider";

const DealDetails = () => {
  const { orders } = useOrders();
  return (
    <div className="container deal-details">
      <h2>Deal Details</h2>
      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => {
              return (
                <tr key={o.id}>
                  <td>{o.name}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealDetails;
