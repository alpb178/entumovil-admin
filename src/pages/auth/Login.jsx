import React from "react";
import { LogoEntuMovil } from "@/component/logo/logo";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { Login } from "@/container/auth/login";

export default function LoginPage() {
  return (
    <PageAnimation>
      <LogoEntuMovil isLogin={true} />
      <Login />
    </PageAnimation>
  );
}
