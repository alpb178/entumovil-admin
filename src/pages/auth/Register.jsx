import AuthBottomBar from "@/component/bottombar/bottombar.component";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { RegisterForm } from "@/container/auth/register";
import React from "react";

export default function RegisterPage() {
  return (
    <PageAnimation>
      <RegisterForm />
      <AuthBottomBar />
    </PageAnimation>
  );
}
