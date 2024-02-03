import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    // Nested Routes
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/menu',
        Component: Menu
      },
      {
        path: '/order',
        Component: Order
      },
    ]
  },
]);