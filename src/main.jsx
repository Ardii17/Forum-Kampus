import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons/css/boxicons.min.css";
import "antd/dist/reset.css"; // Gunakan CSS global Ant Design
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Views/Home";
import SigninView from "./assets/Views/Auth/Signin";
import SignupView from "./assets/Views/Auth/Signup";
import ThemeProvider from "./assets/Contexts/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninView />,
  },
  {
    path: "/signup",
    element: <SignupView />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
