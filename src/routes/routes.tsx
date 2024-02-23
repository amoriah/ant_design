import { Navigate, RouteObject } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";

import pages from "../pages/index";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/hotels" />,
  },
  {
    path: "/hotels",
    element: <AuthProvider page={<pages.Hotels />} />,
  },
  {
    path: "/hotels/:id",
    element: <AuthProvider page={<pages.Hotel />} />,
  },
  {
    path: "/account",
    element: <AuthProvider page={<pages.Account />} />,
  },
  {
    path: "/hotels/:id/reservation",
    element: <AuthProvider page={<pages.Reservation />} />,
  },
  {
    path: "/login",
    element: <pages.Login />,
  },
  {
    path: "/signup",
    element: <pages.Signup />,
  },
];

export default routes;
