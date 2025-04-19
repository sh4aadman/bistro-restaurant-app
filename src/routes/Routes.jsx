import { createBrowserRouter } from "react-router";
import Layouts from "/src/layouts/Layouts";
import Home from "/src/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
