import AuthBottomBar from "@/component/bottombar/bottombar.component";
import { LogoEntuMovil } from "@/component/logo/logo";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { Login } from "@/container/auth/login";

import React from "react";

export default function LoginPage() {
  return (
    <PageAnimation>
      <LogoEntuMovil />
      <Login />
      <AuthBottomBar />
    </PageAnimation>
  );
}
