import React, { useState } from "react";

import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import useUsers, { deleteUsers } from "@/hooks/useUsers";

export default function TableAdmin() {
  const { data, isLoading } = useUsers({
    args: {},
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
      Header: "Nombre",
      accessor: "name",
      align: "center",
    },
    {
      Header: "Apellidos",
      accessor: "lastName",
      align: "center",
    },
    {
      Header: "Telefono",
      accessor: "phone",
      align: "center",
    },
    {
      Header: "Activar/Desactivar",
      id: "activated/desactivated",
      Cell: ({ row }) => <TableActions onEdit={(row) => {}} />,
    },
    {
      Header: "Acciones",
      id: "actions",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onDelete={() => {
            console.log(row, "ROW", row.original.id);
            deleteUsers({ args: { id: row.original.id } });
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
