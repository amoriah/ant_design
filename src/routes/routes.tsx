import { Navigate, RouteObject } from "react-router-dom";

import pages from "../pages/index";
import { hotels } from "../data/hotelsData";



const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/hotels" />,
  },
  {
    path: "/hotels",
    // element: <AuthProvider componentPage={<pages.MainPage />} />,
    element: <pages.Hotels />,
  },
  {
    path: "/hotels/1",
    // element: <AuthProvider componentPage={<pages.MyVacancies />} />,
    element: <pages.Hotel hotel={hotels[1]} />,
  },
  {
    path: "/account",
    // element: <AuthProvider componentPage={<pages.ActiveVacancies />} />,
    element: <pages.Account />,
  },
  {
    path: "/hotels/:id/reservation",
    // element: <AuthProvider componentPage={<pages.CreateVacancy />} />,
    element: <pages.Reservation />,
  },
  {
    path: "/login",
    element: <pages.Login />,
  },
  {
    path: "/register",
    element: <pages.Register />,
  },
];

export default routes;
