import React, { useState } from "react";
import "./css/DealDetails.css";
import { useOrders } from "../../../Contexts/OrderProvider";

const DealDetails = () => {
  const { orders } = useOrders();
  const [selectedMonth, setSelectedMonth] = useState("all");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filterOrdersByMonth = (orders, month) => {
    if (month === "all") return orders;
    
    return orders.filter((order) => {
      const orderMonth = new Date(order.date).getMonth(); // 0-indexed (Jan = 0, Dec = 11)
      const monthMap = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
      };
      return orderMonth === monthMap[month];
    });
  };

  const filteredOrders = filterOrdersByMonth(orders, selectedMonth);

  return (
    <div className="container deal-details">
      <div className="title-line">
        <h2>Deal Details</h2>
        <select name="month" id="month-select" value={selectedMonth} onChange={handleMonthChange}>
          <option value="all">All Orders</option>
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
          <option value="apr">April</option>
          <option value="may">May</option>
          <option value="jun">June</option>
          <option value="jul">July</option>
          <option value="aug">August</option>
          <option value="sep">September</option>
          <option value="oct">October</option>
          <option value="nov">November</option>
          <option value="dec">December</option>
        </select>
      </div>
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
            {filteredOrders.map((o) => (
              <tr key={o.id}>
                <td>{o.name}</td>
                <td>{o.address}</td>
                <td>{o.date}</td>
                <td>{o.type}</td>
                <td>{o.amount}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealDetails;
