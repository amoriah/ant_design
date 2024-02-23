import { Navigate } from "react-router";
import { useStore } from "../store/rootStore";

export const AuthProvider = ({ page }: any) => {
  const rootStore = useStore();
  const { isAccess } = rootStore;

  if (!isAccess) {
    return <Navigate to="/login" />;
  }

  return page;
};
