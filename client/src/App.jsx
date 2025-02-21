import { Routes, Route } from "react-router";
import Dashboard from "./Views/Dashboard/Dashboard";
import Products from "./Views/Products/Products";
import OrderList from "./Views/OrderList/OrderList";
import ToDo from "./Views/ToDo/ToDo";
import Team from "./Views/Team/Team";

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
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default App;
 

/* 
import { Routes, Route } from "react-router";
import Layout from "./Layout/Layout";
import Dashboard from "./Views/Dashboard/Dashboard";
import Products from "./Views/Products/Products";
import OrderList from "./Views/OrderList/OrderList";
import ToDo from "./Views/ToDo/ToDo";
import Team from "./Views/Team/Team";
import ProductStock from "./Views/ProductStock/ProductStock";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/product-stock" element={<ProductStock />} />
        <Route path="/to-do" element={<ToDo />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Layout>
  );
};

export default App; */

