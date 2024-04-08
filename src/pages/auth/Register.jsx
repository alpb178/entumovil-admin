import AuthBottomBar from "@/component/bottombar/bottombar.component";
import { Register } from "@/container/auth/register";
import React, { useEffect, useState } from "react";

export default function RegisterPage() {
  return (
    <>
      <Register />
      <AuthBottomBar />
    </>
  );
}
