import { Routes, Route } from "react-router";
import Dashboard from "./Views/Dashboard/Dashboard";
import Products from "./Views/Products/Products";
import OrderList from "./Views/OrderList/OrderList";
import ToDo from "./Views/ToDo/ToDo";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order-list" element={<div>Order List</div>} />
      <Route path="/products" element={<div>Products</div>} />
      <Route path="/order-list" element={<OrderList />} />
      <Route path="/product-stock" element={<div>Product Stock</div>} />
      <Route path="/to-do" element={<ToDo />} />
      <Route path="/team" element={<div>Team</div>} />
    </Routes>
  );
};

export default App;
