import React, { useState } from "react";
import { useQueryClient } from "react-query";
import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import { deleteUsers } from "@/hooks/useUsers";
import { toast } from "react-toastify";
import { API_URLS_USERS_LIST } from "@/lib/constant";
import ModalDeleteRol from "@/component/modal-confirmation/modal-delete-rol";
import { useFindRoles } from "@/hooks/useRoles";
import Loader from "@/component/loader";
import { useAuth } from "@/hooks/useAuth";

export default function ViewRoleAdmin({ idUser }) {
  const { data, isLoading } = useFindRoles({
    args: { id: idUser },
    options: {
      keepPreviousData: true,
    },
  });

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});

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
      Header: "Nombre",
      accessor: "name",
    },

    {
      Header: "Descripción",
      accessor: "description",
      align: "center",
    },

    {
      Header: "Eliminar",
      id: "actions",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onDelete={() => {
            setId(row.original.id);
            setOpen(true);
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
    <div className="align-center mt-5 content-center">
      {isLoading ? <Loader /> : <DataTable {...options} />}

      <ModalDeleteRol
        open={open}
        onOpen={closeShowModal}
        onSubmit={handleDelete}
      />
    </div>
  );
}
