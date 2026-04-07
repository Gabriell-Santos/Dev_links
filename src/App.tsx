import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Admin } from "./Pages/Admin";
import { NetWords } from "./Pages/NetWords";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/social",
    element: <NetWords />,
  },
]);

export { router };
