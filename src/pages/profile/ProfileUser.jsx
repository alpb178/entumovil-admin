import React from "react";
import { PageAnimation } from "@/component/page-animation/page-animation.component";
import { ProfileUser } from "@/container/profile/components/user";

export default function ProfileUserPage() {
  return (
    <PageAnimation>
      <ProfileUser />
    </PageAnimation>
  );
}
