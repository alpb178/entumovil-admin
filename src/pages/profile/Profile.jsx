import React from "react";
import { useProfile } from "@/hooks/useProfile";

import { PageAnimation } from "@/component/page-animation/page-animation.component";

import { LogoEntuMovil } from "@/component/logo/logo";
import { Profile } from "@/container/profile";
import { NavbarUserLoggued } from "@/component/navbar";


export default function ProfilePage() {
  const { userLogged } = useProfile();

  return (
    <PageAnimation>
       <NavbarUserLoggued />
      <Profile />
    </PageAnimation>
  );
}
