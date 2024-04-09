// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/auth/Login";
import ProfileAdminPage from "./pages/profile/ProfileAdmin";
import RegisterPage from "./pages/auth/Register";
import ProfileUserPage from "./pages/profile/ProfileUser";
import {
  URL_FORGOT_PASSWORD,
  URL_HOME,
  URL_LOGIN,
  URL_PROFILE_ADMIN,
  URL_PROFILE_USER,
  URL_REGISTER,
} from "./lib/constant";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./pages/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path={URL_LOGIN} element={<LoginPage />} />
      <Route path={URL_REGISTER} element={<RegisterPage />} />
      <Route path={URL_FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route
        path={URL_PROFILE_ADMIN}
        element={
          <ProtectedRoute>
            <ProfileAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={URL_HOME}
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path={URL_PROFILE_USER}
        element={
          <ProtectedRoute>
            <ProfileUserPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to={URL_HOME} replace />} />
    </Routes>
  );
}

export default App;
