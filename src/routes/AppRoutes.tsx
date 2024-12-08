import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/about-us",
        element:<About/>
      }
    ]
  },
]);

export default router;