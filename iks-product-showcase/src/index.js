import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { HomePage } from "./Routes/Home";
import { ProductPage } from "./Routes/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: "/:productId",
    element: <ProductPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
