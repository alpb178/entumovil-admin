import React from "react";

import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { ProfileAdmin } from "@/container/profile/components/admin";

export default function ProfileAdminPage() {
  return (
    <PageAnimation>
      <ProfileAdmin />
    </PageAnimation>
  );
}
