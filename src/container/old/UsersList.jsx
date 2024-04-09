import React, { useEffect, useState } from "react";

import useUsers from "@/hooks/useUsers";
import DataTable from "../../component/table";
import TableActions from "../../component/table/TableActions";
import Profile from "./Profile";
import ProfileAdmin from "./ProfileAdmin";
import Loader from "@/component/loader";

export default function UsersList() {
  const [openNav, setOpenNav] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const { data, isLoading } = useUsers({
    args: {},
    options: {
      keepPreviousData: true,
    },
  });

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const onUpdate = (event, row) => {
    event.stopPropagation();
    setSelectedItem(row?.original);
    setOpenForm(true);
  };

  const onDelete = (event, row) => {
    event.stopPropagation();
    setDeleteConfirmation({ open: true, id: row.original.id });
  };

  const columns = React.useMemo(() => [
    {
      Header: "KeyCloack",
      accessor: "keyDoackId",
    },

    {
      Header: "Cuenta de Banco",
      accessor: "cuentaBanco",
      align: "center",
    },
    {
      Header: "Número de telefóno",
      accessor: "telefono",
      align: "center",
    },
    {
      id: "optionsareas",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onViewDetails={(row) => {
            setSelectedItem(row?.original, setOpenForm(true));
            setOpenForm(true);
          }}
        />
      ),
    },
  ]);

  const options = {
    columns,
    data: data,
    count: 10,
    onRowClick: (row) => {
      setSelectedItem(row?.original, setOpenForm(true));
      setOpenForm(true);
    },
  };

  return (
    <>
      {isLoading ? <Loader /> : <DataTable {...options} />}

      {openForm && (
        <ProfileAdmin
          data={selectedItem}
          open={openForm}
          onOpen={setOpenForm}
        />
      )}
    </>
  );
}
