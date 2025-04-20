import { createBrowserRouter } from "react-router";
import Layouts from "/src/layouts/Layouts";
import Home from "/src/pages/Home/Home";
import ContactUs from "/src/pages/ContactUs/ContactUs";
import Dashboard from "/src/pages/Dashboard/Dashboard";
import Menu from "/src/pages/Menu/Menu";
import Shop from "/src/pages/Shop/Shop";
import SignOut from "/src/pages/SignOut/SignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/sign-out",
        element: <SignOut />,
      },
    ],
  },
]);

export default router;
