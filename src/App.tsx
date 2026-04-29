import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Admin } from "./Pages/Admin";
import { Login } from "./Pages/Login";
import { NetWords } from "./Pages/NetWords";
import { Private } from "./Routes/Private";
import { NotFound } from "./Pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Private>
        <Home />
      </Private>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/social",
    element: (
      <Private>
        <NetWords />
      </Private>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
