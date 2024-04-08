// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import SecureRoute from "./SecureRoute";
import LoginPage from "./pages/auth/Login";
import ProfileAdminPage from "./pages/profile/ProfileAdmin";
import RegisterPage from "./pages/auth/Register";
import ProfileUserPage from "./pages/profile/ProfileUser";
import { URL_FORGOT_PASSWORD, URL_HOME, URL_LOGIN, URL_PROFILE_ADMIN, URL_PROFILE_USER, URL_REGISTER } from "./lib/constant";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path={URL_LOGIN} element={<LoginPage />} />
      <Route path={URL_REGISTER} element={<RegisterPage />} />
      <Route path={URL_FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route exact path={URL_HOME} element={<SecureRoute />}>
        <Route path={URL_PROFILE_ADMIN} element={<ProfileAdminPage />} />
        <Route path={URL_PROFILE_USER} element={<ProfileUserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
