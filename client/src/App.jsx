import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Dashboard from "./Views/Dasboard/Dashboard";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/order-list" element={<div>Order List</div>} />
        <Route path="/product-stock" element={<div>Product Stock</div>} />
        <Route path="/to-do" element={<div>To-Do</div>} />
        <Route path="/team" element={<div>Team</div>} />
      </Routes>
    </main>
  );
};

export default App;
