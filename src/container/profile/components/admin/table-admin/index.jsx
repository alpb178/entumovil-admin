import React, { useState } from "react";

import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import { useNavigate } from "react-router-dom";
import { URL_PROFILE_USER } from "@/lib/constant";

export default function TableAdmin() {
  const [selectedItem, setSelectedItem] = useState();
  const navigate = useNavigate();

  /* const { data, isLoading } = useUrls({
    args: {},
    options: {
      keepPreviousData: true,
    },
  });*/

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
      Cell: ({ row }) => (
        <TableActions
          onEdit={(row) => {
            // setSelectedItem(row?.original, setOpenForm(true));
            navigate(URL_PROFILE_USER);
          }}
        />
      ),
    },
    {
      Header: "Acciones",
      id: "optionsareas",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onDelete={(row) => {
            // setSelectedItem(row?.original, setOpenForm(true));
            navigate(URL_PROFILE_USER);
          }}
        />
      ),
    },
  ]);

  const options = {
    columns,
    data: [
      {
        name: "Ale",
        lastName: "perez",
        email: "alpb@getMaxListeners.com",
        phone: "",
      },
    ],
    count: 10,
    onRowClick: (row) => {
      setSelectedItem(row?.original, setOpenForm(true));
      setOpenForm(true);
    },
  };

  return (
    <div className="align-center content-center">
      <DataTable {...options} />
    </div>
  );
}
