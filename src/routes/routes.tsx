import { Outlet, createBrowserRouter } from "react-router-dom";
import { NotFound404 } from "../pages/NotFound404";
import { Home } from "../pages/dashboard/Home";
import { Users } from "../pages/dashboard/Users";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { AuthGuard } from "../auth/guard/AuthGuard";
import { GuestGuard } from "../auth/guard/GuestGuard";
import { Programs } from "../pages/dashboard/Programs";
import { Registration } from "../pages/registration/Registration";
import { paths } from "./paths";

import { NewPassword } from "../pages/auth/NewPassword";
import { CreateNewPassword } from "../pages/auth/CreateNewPassword";
import { VerificationPassword } from "../pages/auth/VerificationPassword";
import { SuccessPassword } from "../pages/auth/SuccessPassword";
import { ForgotPassword } from "../pages/auth/ForgotPassword";

const routes = createBrowserRouter([
  {
    path: paths.auth.root,
    element: <AuthGuard />,
    children: [
      {
        path: paths.auth.login,
        element: <Login />,
      },
      {
        path: paths.auth.register,
        element: <Register />,
      },
      {
        path: paths.auth.forgotPassword,
        element: <ForgotPassword />,
      },
      {
        path: paths.auth.newPassword,
        element: <NewPassword />,
      },
      {
        path: paths.auth.createNewPassword,
        element: <CreateNewPassword />,
      },
      {
        path: paths.auth.verificationPassword,
        element: <VerificationPassword />,
      },
      {
        path: paths.auth.successPassword,
        element: <SuccessPassword />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: paths.dashboard.root,
    element: <Outlet />,
    children: [
      {
        path: paths.dashboard.root,
        element: <GuestGuard />,
        // element: <DashboardLayoutMain />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: paths.dashboard.users.root,
            element: <Users />,
          },
          {
            path: paths.dashboard.programs,
            element: <Programs />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);

export default routes;
