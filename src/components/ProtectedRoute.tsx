import { Navigate, Outlet } from "react-router-dom";
import { useAuthLoading, useUser } from "../Context/userContext";

export default function ProtectedRoute() {
  const [loading] = useAuthLoading();

  const user = useUser();
  if (!loading && !user[0]) return <Navigate to="/" />;
  return <Outlet />;
}
