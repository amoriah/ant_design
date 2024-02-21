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
    // element: <pages.Hotels />,
  },
  {
    //вытаскивать определенный отель из store
    path: "/hotels/:id",
    element: <AuthProvider page={<pages.Hotel />} />,
    // element: <pages.Hotel />,
  },
  {
    path: "/account",
    element: <AuthProvider page={<pages.Account />} />,
    // element: <pages.Account />,
  },
  {
    path: "/hotels/:id/reservation",
    element: <AuthProvider page={<pages.Reservation />} />,
    // element: <pages.Reservation />,
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
