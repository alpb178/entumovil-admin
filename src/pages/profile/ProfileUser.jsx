
import React, {  } from "react";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { ProfileUser } from "@/container/profile/components/user";
import { NavbarUserLoggued } from "@/component/navbar";

export default function ProfileUserPage() {
  return (
    <PageAnimation>
      <NavbarUserLoggued />
      <ProfileUser />
    </PageAnimation>
  );
}
