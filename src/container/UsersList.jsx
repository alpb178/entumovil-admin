import React, { useEffect } from "react";

import useUsers from "@/hooks/useUsers";
import DataTable from "../component/table";
import TableActions from "../component/table/TableActions";

export default function UsersList() {
  const [openNav, setOpenNav] = React.useState(false);

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
      Header: "Nombre",
      accessor: "nombre",
    },

    {
      Header: "Ocupación",
      accessor: "ocupacion",
      align: "center",
    },
    {
      Header: "KeyCloack",
      accessor: "keyDoackId",
      align: "center",
    },
    {
      id: "optionsareas",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onEdit={(event) => onUpdate(event, row)}
          onDelete={(event) => onDelete(event, row)}
        />
      ),
    },
  ]);

  const options = {
    columns,
    data: data,
    count: 10,
    // setPage: onPageChangeCallback,
    // setSortBy: onSortChangeCallback,
    //  pageSize,
    //  onPageSizeChange: setPageSize,
    /*  onRowClick: (row) => {
      setSelectedItem(row?.original, setOpenForm(true));
    },*/
  };

  return <DataTable {...options} />;
}
