/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { DataTable } from "@/component/table";
import { TableActions } from "@/component/table/TableActions";
import { toast } from "react-toastify";
import { API_URLS_ROLES_LIST, DELETE } from "@/lib/constant";
import { ModalDeleteRol } from "@/component/modal-confirmation/modal-delete-rol";
import { useFindRoles } from "@/hooks/useRoles";
import { Loader } from "@/component/loader";
import { getErrorTransaction } from "@/lib/utils";
import { saveRoles } from "@/hooks/useAdmin";

export function ViewRoleAdmin({ idUser }) {
  const { data, isLoading } = useFindRoles({
    args: { id: idUser },
    options: {
      keepPreviousData: true,
    },
  });

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const closeShowModal = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    let method = DELETE;
    const args = {
      id: idUser,
      data: { roles: [user.name] },
    };
    try {
      await saveRoles({
        args,
        options: {
          method,
        },
      }).then(() => {
        toast.success("Role Eliminado");
        queryClient.invalidateQueries([API_URLS_ROLES_LIST]);
        closeShowModal();
      });
    } catch (error) {
      toast.error(getErrorTransaction(error.status));
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
            setUser(row.original);
            setOpen(true);
          }}
        />
      ),
    },
  ]);

  const options = {
    columns,
    data: data?.filter((obj) => obj.name != "default-roles-checkout-client"),
    count: 10,
  };

  return (
    <div className="align-center mt-5 content-center">
      <a className="border-b p-2 text-2xl">Roles del usuario</a>
      {isLoading ? <Loader /> : <DataTable {...options} />}

      <ModalDeleteRol
        open={open}
        onOpen={closeShowModal}
        onSubmit={handleDelete}
      />
    </div>
  );
}
