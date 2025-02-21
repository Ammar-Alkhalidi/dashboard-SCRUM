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
 

/* import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ProductProvider } from "./Contexts/ProductProvider.jsx";
import { OrderProvider } from "./Contexts/OrderProvider.jsx";
import { TeamProvider } from "./Contexts/TeamProvider.jsx";
import "./index.css";
import "./fonts.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <OrderProvider>
          <TeamProvider>
            <App />
          </TeamProvider>
        </OrderProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
 */