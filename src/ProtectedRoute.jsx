import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import keycloak from "./keycloack";
import { URL_LOGIN } from "./lib/constant";

export default function ProtectedRoute({ redirectTo = URL_LOGIN, children }) {
  useEffect(() => {
    const checkAuth = async () => {
      await keycloak.init({ onLoad: "check-sso" });
    };

    checkAuth();
  }, []);
  if (keycloak.authenticated) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
