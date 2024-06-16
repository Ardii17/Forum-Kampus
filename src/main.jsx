import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons/css/boxicons.min.css";
import "antd/dist/reset.css"; // Gunakan CSS global Ant Design
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
