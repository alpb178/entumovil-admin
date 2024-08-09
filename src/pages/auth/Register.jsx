import React from "react";

import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { RegisterForm } from "@/container/auth/register";

export default function RegisterPage() {
  return (
    <PageAnimation>
      <RegisterForm />
    </PageAnimation>
  );
}
