import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout/Layout.jsx";
import { BrowserRouter } from "react-router";
import "./fonts.css";
import { ProductProvider } from "./Contexts/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Layout>
          <App />
        </Layout>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
