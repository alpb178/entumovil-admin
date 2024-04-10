import React, { useEffect, useState } from "react";

import { NavbarUserLoggued } from "@/component/navbar";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { ProfileAdmin } from "@/container/profile/components/admin";

export default function ProfileAdminPage() {
  return (
    <PageAnimation>
      <NavbarUserLoggued />
      <ProfileAdmin />
    </PageAnimation>
  );
}
