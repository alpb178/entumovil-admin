import React, { useState } from "react";
import { useQueryClient } from "react-query";
import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import useUsers, { deleteUsers } from "@/hooks/useUsers";
import { toast } from "react-toastify";
import { API_URLS_USERS_LIST } from "@/lib/constant";
import ModalDelete from "@/component/modal-confirmation/modal-delete-confirmation";

export default function TableAdmin() {
  const { data, isLoading } = useUsers({
    args: {},
    options: {
      keepPreviousData: true,
    },
  });

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  const closeShowModal = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteUsers({ args: { id } }).then(() => {
        closeShowModal();
        toast.success("Usuario Eliminado");
        queryClient.invalidateQueries([API_URLS_USERS_LIST]);
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

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
            setId(row.original.id);
            setOpen(true);
            //deleteUsers({ args: { id: row.original.id } });
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
      <ModalDelete
        open={open}
        onOpen={closeShowModal}
        onSubmit={handleDelete}
      />
    </div>
  );
}
