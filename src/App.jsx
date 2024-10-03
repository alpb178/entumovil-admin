import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import ProfileAdminPage from "./pages/profile/ProfileAdmin";
import { URL_HOME, URL_LOGIN, URL_PROFILE_EDIT_ADMIN } from "./lib/constant";
import ProtectedRoute from "./route/ProtectedRoute";

import ProfileEditAdminPage from "./pages/profile/ProfileEditAdmin";

function App() {
  return (
    <Routes>
      <Route path={URL_LOGIN} element={<LoginPage />} />

      <Route
        path={URL_HOME}
        element={
          <ProtectedRoute>
            <ProfileAdminPage />
          </ProtectedRoute>
        }
      />

      <Route
        path={URL_PROFILE_EDIT_ADMIN}
        element={
          <ProtectedRoute>
            <ProfileEditAdminPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to={URL_HOME} replace />} />
    </Routes>
  );
}

export default App;
