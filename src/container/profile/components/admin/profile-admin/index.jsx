import React from "react";
import { useFindUsers } from "@/hooks/useUsers";

import ViewRoleAdmin from "./viewRole";
import { ViewUser } from "./viewUser";
import { useParams } from "react-router-dom";
import Loader from "@/component/loader";

export function ProfileEditAdmin() {
  const params = useParams();
  const { data, isLoading } = useFindUsers({
    args: { id: params.id },
    options: {
      keepPreviousData: false,
    },
  });
  return (
    <div className="align-center content-center justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="m-16 ">
          <ViewUser data={data[0]} />

          <ViewRoleAdmin idUser={data[0].id} />
        </div>
      )}
    </div>
  );
}
