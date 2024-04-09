import React, { useEffect, useState } from "react";

import { useProfile } from "@/hooks/useProfile";
import useAuth from "@/hooks/useAuth";

import { NavbarUserLoggued } from "@/component/navbar";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import {ProfileAdmin} from "@/container/profile/components/admin";

export default function ProfileAdminPage() {
  const [openNav, setOpenNav] = useState(false);
  const isLogin = useAuth();

  const { userLogged } = useProfile();


  return (
    <PageAnimation>
      <NavbarUserLoggued />
      <ProfileAdmin />
    </PageAnimation>
  );
}
