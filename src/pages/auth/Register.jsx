import AuthBottomBar from "@/component/bottombar/bottombar.component";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { Register } from "@/container/auth/register";
import React, { useEffect, useState } from "react";

export default function RegisterPage() {
  return (
    <PageAnimation>
      <Register />
      <AuthBottomBar />
    </PageAnimation>
  );
}
