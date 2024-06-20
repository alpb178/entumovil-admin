import React from "react";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { Login } from "@/container/auth/login";

export default function LoginPage() {
  return (
    <PageAnimation>
      <Login />
    </PageAnimation>
  );
}
