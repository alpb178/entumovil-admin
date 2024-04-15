import React from "react";
import { useFindUsers } from "@/hooks/useUsers";

import ViewRoleAdmin from "./viewRole";
import { ViewUser } from "./viewUser";
import { useParams } from "react-router-dom";

export function ProfileEditAdmin() {
  const params = useParams();
  const { data, isLoading } = useFindUsers({
    args: { id: params.id },
    options: {
      keepPreviousData: false,
    },
  });
  return (
    <div className="align-center flex flex-row content-center">
      {console.log(data, params)}
      <div className="m-16 w-1/4">
        <ViewUser data={data[0]} />
      </div>
      <div className="m-16 w-1/2">
        <ViewRoleAdmin />
      </div>
    </div>
  );
}
