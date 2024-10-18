/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { DataTable } from "@/component/table";
import { TableActions } from "@/component/table/TableActions";
import { toast } from "react-toastify";
import { API_URLS_ROLES_LIST, DELETE } from "@/lib/constant";
import { useFindRoles } from "@/hooks/roles/useRoles";
import { Loader } from "@/component/loader";
import { getErrorTransaction } from "@/lib/utils";
import { saveRoles } from "@/hooks/admin/useAdmin";
import { Modal } from "@/component/modal";
import { AssignRole } from "../role-admin";
import { ButtonSubmit } from "@/component/button";

export function ViewRoleAdmin({ idUser }) {
  const { data, isLoading } = useFindRoles({
    args: { id: idUser },
    options: {
      keepPreviousData: true,
    },
  });

  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [openAssingRole, setOpenAssingRole] = useState(false);
  const [user, setUser] = useState({});

  const closeShowModal = () => {
    setOpen(false);
  };

  const closeShowModalAssingRole = () => {
    setOpenAssingRole(false);
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
      getErrorTransaction(error);
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
    <div className="align-center content-center">
      <a className="border-b p-2 text-2xl">Roles del usuario</a>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && data?.length <= 2 && (
            <ButtonSubmit
              name="Asignar rol"
              onClick={() => setOpenAssingRole(true)}
            />
          )}
          <DataTable {...options} />
        </>
      )}

      <Modal
        open={open}
        onOpen={closeShowModal}
        onSubmit={handleDelete}

        height="350px"
      >
        ¿Está seguro que desea desasignar este rol a este usuario?
      </Modal>
      <Modal
        open={openAssingRole}
        onOpen={closeShowModalAssingRole}
        hideButton={true}
        height="350px"
      >
        <AssignRole
          id={idUser}
          data={data}
          onClose={closeShowModalAssingRole}
        />
      </Modal>
    </div>
  );
}
