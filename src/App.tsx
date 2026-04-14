import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
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
    path: "/admin/social",
    element: <NetWords />,
  },
]);

export { router };
