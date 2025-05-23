/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { URL_LOGIN } from "../lib/constant";
import { useAuth } from "../hooks/useAuth";

import { useNavigateLogin } from "@/hooks/navigate/useNavigateLogin";
import React from "react";
import { NavbarUserLoggued } from "@/component/navbar";

export default function ProtectedRoute({ redirectTo = URL_LOGIN, children }) {
  const { isAuthenticated } = useAuth();
  useNavigateLogin();

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
