import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Admin } from "./Pages/Admin";
import { Login } from "./Pages/Login";
import { NetWords } from "./Pages/NetWords";
import { Private } from "./Routes/Private";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);

export { router };
