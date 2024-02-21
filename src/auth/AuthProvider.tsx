import { Navigate } from "react-router";
import { useStore } from "../store/RootStore";

// interface ProdiderProp {
//   page: React.FC;
// }

export const AuthProvider = ({ page }: any) => {
  const { session } = useStore();
  console.log('session', session)

  if (!session.isAuth) {
    return <Navigate to="/login" />;
  }

  return page;
};
