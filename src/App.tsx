import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Admin } from "./Pages/Admin";
import { Login } from "./Pages/Login";
import { NetWords } from "./Pages/NetWords";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/admin/social",
    element: <NetWords />,
  },
]);

export { router };
