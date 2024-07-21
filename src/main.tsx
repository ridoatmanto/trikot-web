import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/ui/layout";
import { Login } from "./routes/login";
import { Cart } from "./routes/cart";
import { Order } from "./routes/order";
import { ProductsRoute, loader as productsLoader } from "./routes/products";
import {
  ProductDetailRoute,
  loader as productDetailLoader,
} from "./routes/product-detail";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductsRoute />,
        loader: productsLoader,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailRoute />,
        loader: productDetailLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
