/* eslint-disable react/prop-types */
import React, { useState } from "react";

import {DataTable} from "@/component/table";
import {TableActions} from "@/component/table/TableActions";
import { useNavigate } from "react-router-dom";
import { URL_PROFILE_USER } from "@/lib/constant";
import { useFindUsers } from "@/hooks/useUsers";
import { useAuth } from "@/hooks/useAuth";
import { PasswordUser } from "../components/password";
import {Modal} from "@/component/modal";

export function TableProfile() {
  const navigate = useNavigate();

  const { username } = useAuth();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});

  const handleUpdatePassword = async (id) => {
    setId(id);
    setOpen(true);
  };

  const closeShowModal = () => {
    setOpen(false);
  };

  const { data } = useFindUsers({
    args: { id: username },
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
      Header: "Nombre y Apellidos",
      accessor: "lastName",
      align: "center",
    },
    {
      Header: "Teléfono",
      accessor: "firstName",
      align: "center",
    },
    {
      Header: "Contraseña",
      id: "password",
      displayName: "passoword",
      align: "center",
      Cell: ({ row }) => (
        <a
          className="items-center"
          onClick={(e) => {
            e.stopPropagation();
            handleUpdatePassword(row.original.id);
          }}
        >
          actualizar
        </a>
      ),
    },
    {
      Header: "Acciones",
      id: "actions",
      displayName: "optionsareas",
      Cell: () => (
        <TableActions
          onEdit={() => {
            navigate(URL_PROFILE_USER);
          }}
        />
      ),
    },
  ]);

  const options = {
    columns,
    data: data,
    count: 10,
    center: true,
  };

  return (
    <div className="align-center content-center">
      <DataTable {...options} />

      <Modal open={open} onOpen={closeShowModal} hideButton={true}>
        <PasswordUser id={id} onClose={closeShowModal} />
      </Modal>
    </div>
  );
}
