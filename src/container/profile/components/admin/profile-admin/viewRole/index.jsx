import React, { useState } from "react";
import { useQueryClient } from "react-query";
import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import useUsers, { deleteUsers, saveUsers } from "@/hooks/useUsers";
import { toast } from "react-toastify";
import { API_URLS_USERS_LIST, PUT } from "@/lib/constant";
import ModalDelete from "@/component/modal-confirmation/modal-delete-confirmation";
import { Input } from "@material-tailwind/react";
import { CheckBox } from "@/component/checkBox";
import ModalDeleteRol from "@/component/modal-confirmation/modal-delete-rol";

export default function ViewRoleAdmin() {
  const { data, isLoading } = useUsers({
    args: {},
    options: {
      keepPreviousData: true,
    },
  });

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});

  const handleActivatedDeactivated = async (id, value) => {
    let method = PUT;

    try {
      const newData = {
        id,
        enabled: value,
      };

      await saveUsers({
        args: newData,
        options: {
          method,
        },
      });
    } catch (error) {
      toast.error(error.toString());
    } finally {
    }
  };

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
      accessor: "email",
    },

    {
      Header: "Activo/Inactivo",
      accessor: "lastName",
      align: "center",
    },
    {
      Header: "Descripción",
      accessor: "firstName",
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
    <div className="align-center content-center mt-5">
      <DataTable {...options} />
      <ModalDeleteRol
        open={open}
        onOpen={closeShowModal}
        onSubmit={handleDelete}
      />
    </div>
  );
}
