import React, { useState } from "react";
import { useQueryClient } from "react-query";
import DataTable from "@/component/table";
import TableActions from "@/component/table/TableActions";
import useUsers, { deleteUsers, saveUsers } from "@/hooks/useUsers";
import { toast } from "react-toastify";
import {
  API_URLS_USERS_LIST,
  PUT,
  URL_PROFILE_EDIT_ADMIN,
} from "@/lib/constant";
import ModalDelete from "@/component/modal-confirmation/modal-delete-confirmation";
import { CheckBox } from "@/component/checkBox";
import { useNavigate } from "react-router-dom";
import Loader from "@/component/loader";

export default function TableAdmin() {
  const { data, isLoading } = useUsers({
    args: {},
    options: {
      keepPreviousData: true,
    },
  });

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});

  const handleActivatedDeactivated = async (id, value) => {
    let method = PUT;

    try {
      const newData = {
        id,
        isEnabled: value,
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

      Cell: ({ row }) => {
        return (
          <div className=" flex items-center">
            <CheckBox
              enabled={row.original.enabled}
              id={row.original.id}
              onAFtterCheck={handleActivatedDeactivated}
            />
          </div>
        );
      },
    },
    {
      Header: "Acciones",
      id: "actions",
      displayName: "optionsareas",
      Cell: ({ row }) => (
        <TableActions
          onDelete={() => {
            setId(row.original.id);
            setOpen(true);
          }}
          onEdit={() => {
            navigate(
              URL_PROFILE_EDIT_ADMIN.replace(":id", row?.original?.username)
            );
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
    <div className="align-center m-5 content-center">
      {isLoading ? <Loader /> : <DataTable {...options} />}
      <ModalDelete
        open={open}
        onOpen={closeShowModal}
        onSubmit={handleDelete}
      />
    </div>
  );
}
