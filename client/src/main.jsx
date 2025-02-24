import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout/Layout.jsx";
import { BrowserRouter } from "react-router";
import "./fonts.css";
import { ProductProvider } from "./Contexts/ProductProvider.jsx";
import { OrderProvider } from "./Contexts/OrderProvider.jsx";
import { TeamProvider } from "./Contexts/TeamProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <OrderProvider>
          <TeamProvider>
            <Layout>
              <App />
            </Layout>
          </TeamProvider>
        </OrderProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);

