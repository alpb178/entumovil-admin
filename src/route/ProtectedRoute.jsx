import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import keycloak from "../keycloack";
import { URL_LOGIN } from "../lib/constant";
import { useAuth } from "../hooks/useAuth";
import { NavbarUserLoggued } from "../component/navbar";

export default function ProtectedRoute({ redirectTo = URL_LOGIN, children }) {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    const checkAuth = async () => {
      await keycloak.init({ onLoad: "check-sso" });
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
  return children ? <><NavbarUserLoggued />{children}</> : <Outlet />;
}
