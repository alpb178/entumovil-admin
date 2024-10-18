import React from "react";
import { useFindUsers } from "@/hooks/users/useUsers";

import { ViewRoleAdmin } from "./viewRole";
import { ViewUser } from "./viewUser";
import { useParams } from "react-router-dom";
import { Loader } from "@/component/loader";

export function ProfileEditAdmin() {
  const params = useParams();
  const { data, isLoading } = useFindUsers({
    args: { id: params.id },
    options: {
      keepPreviousData: false,
    },
  });
  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-row ">
      <div className="w-1/2 p-10">
        <ViewUser data={data[0]} />
      </div>

      <div className="w-1/2 p-10">
        <ViewRoleAdmin idUser={data[0].id} />
      </div>
    </div>
  );
}
