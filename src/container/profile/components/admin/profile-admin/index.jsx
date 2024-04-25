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
    <div className="align-center content-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="m-16 flex border">
          <div className="w-1/2 border-r p-5">
            <a className="border-b p-2 text-2xl">Detalles del usuario</a>
            <ViewUser data={data[0]} />
          </div>
          <div className="w-full p-5 ">
            <a className="border-b p-2 text-2xl">Roles del usuario</a>
            <ViewRoleAdmin idUser={data[0].id} />
          </div>
        </div>
      )}
    </div>
  );
}
