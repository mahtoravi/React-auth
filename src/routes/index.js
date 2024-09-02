import React from "react";
import { auth_route } from "./auth";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { main_route } from "./main";

const Routes = () => {
  const combine_route = [...auth_route, ...main_route];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="auth/login" />,
    },
    ...combine_route,
    { path: "*", element: <div>404 page not found</div> },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
