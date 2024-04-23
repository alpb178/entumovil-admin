import { Navigate, Outlet } from "react-router-dom";
import { URL_LOGIN } from "../lib/constant";
import { useAuth } from "../hooks/useAuth";
import { NavbarUserLoggued } from "../component/navbar";

export default function ProtectedRoute({ redirectTo = URL_LOGIN, children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
  return children ? (
    <>
      <NavbarUserLoggued />
      {children}
    </>
  ) : (
    <Outlet />
  );
}
