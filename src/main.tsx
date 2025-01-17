import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, loader as layoutLoader } from "./components/ui/layout";
import { Order } from "./routes/order";
import { ProductsRoute, loader as productsLoader } from "./routes/products";
import {
  ProductDetailRoute,
  loader as productDetailLoader,
} from "./routes/product-detail";

import {
  LoginRoute,
  loader as loginLoader,
  action as loginAction,
} from "./routes/login";
import {
  UserDashboardRoute,
  loader as userDashboardLoader,
  action as userDashboardAction,
} from "./routes/user-dashboard";
import { CartRoute, loader as cartLoader } from "./routes/cart";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: layoutLoader,
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
        element: <LoginRoute />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: "/dashboard",
        element: <UserDashboardRoute />,
        loader: userDashboardLoader,
        action: userDashboardAction,
      },
      {
        path: "/cart",
        element: <CartRoute />,
        loader: cartLoader,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
