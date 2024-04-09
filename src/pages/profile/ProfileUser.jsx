import keycloak from "@/keycloack";

import React, { useEffect, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import useAuth from "@/hooks/useAuth";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { ProfileUser } from "@/container/profile/components/user";
import { LogoEntuMovil } from "@/component/logo/logo";
import { NavbarUserLoggued } from "@/component/navbar";

export default function ProfileUserPage() {
  const [openNav, setOpenNav] = useState(false);
  const isLogin = useAuth();

  const { userLogged } = useProfile();

  return (
    <PageAnimation>
      <NavbarUserLoggued />
      <ProfileUser />
    </PageAnimation>
  );
}
