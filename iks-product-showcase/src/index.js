import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { HomePage } from "./Routes/Home";
import { ProductPage } from "./Routes/Product";
import { FaArrowUp } from "react-icons/fa";

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

const handleClick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <FaArrowUp onClick={handleClick} className="scroll-top-button" />
  </React.StrictMode>
);
