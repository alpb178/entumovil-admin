import React from "react";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { RegisterComplete } from "@/container/auth/register-complete";

export default function RegisterCompletePage() {
  return (
    <PageAnimation>
      <RegisterComplete />
    </PageAnimation>
  );
}
