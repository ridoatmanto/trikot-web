import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import { Layout } from "./components/ui/layout";
import { Login } from "./routes/login";
import { Detail } from "./routes/detail";
import { Cart } from "./routes/cart";
import App from "./routes/app";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Cart",
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
