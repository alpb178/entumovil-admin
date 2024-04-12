import React, { useState } from "react";

import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import { useNavigate } from "react-router-dom";
import { URL_PROFILE_USER } from "@/lib/constant";
import { useFindUsers } from "@/hooks/useUsers";
import { useAuth } from "@/hooks/useAuth";

export default function TableProfile() {
  const navigate = useNavigate();

  const { getId } = useAuth();

  const { data, isLoading } = useFindUsers({
    args: { id: getId() },
    options: {
      keepPreviousData: true,
    },
  });

  const columns = React.useMemo(() => [
    {
      Header: "Correo electrónico",
      accessor: "email",
    },

    {
      Header: "Nombre y Apellidos",
      accessor: "lastName",
      align: "center",
    },
    {
      Header: "Telefóno",
      accessor: "firstName",
      align: "center",
    },
    {
      Header: "Acciones",
      id: "actions",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onEdit={() => {
            const path = URL_PROFILE_USER.replace(
              ":id",
              row?.original?.username
            );
            navigate(path);
          }}
        />
      ),
    },
  ]);

  const options = {
    columns,
    data: data,
    count: 10,
  };

  return (
    <div className="align-center content-center">
      <DataTable {...options} />
    </div>
  );
}
