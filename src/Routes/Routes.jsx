import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    // Nested Routes
    children: [
      {
        path: '/',
        Component: Home
      }
    ]
  },
]);