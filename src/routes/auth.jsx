import { Navigate } from "react-router-dom";
import Login from "../Pages/auth/Login";
import Signup from "../Pages/auth/Signup";
import RootLayout from "../Pages/RootLayout";
import DeleteUser from "../Pages/auth/DeleteUser";
import UpdataPassward from "../Pages/auth/UpdatePassword";

export const auth_route = [
  {
    element: <RootLayout />,
    path: "auth",
    children: [
      { index: true, element: <Navigate to="login" /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "delete_user", element: <DeleteUser /> },
      { path: "update_password", element: <UpdataPassward /> },
    ],
  },
];
