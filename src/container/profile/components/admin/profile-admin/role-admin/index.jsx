/* eslint-disable react/prop-types */
import React from "react";
import { Form, Formik } from "formik";
import { ButtonCancel, ButtonSubmit } from "@/component/button";
import { toast } from "react-toastify";
import { getErrorTransaction } from "@/lib/utils";
import { API_URLS_ROLES_LIST, POST } from "@/lib/constant";

import { dictButtonAccept, dictButtonCancel, dictLoad } from "@/lib/dict";
import { CheckBoxField } from "@/component/field/checkBox";
import { saveRoles } from "@/hooks/admin/useAdmin";
import { useQueryClient } from "react-query";

export function AssignRole(props) {
  const { id, data, onClose } = props;

  const isUser = data?.filter((obj) => obj.name === "user")?.length > 0;
  const isAdmin = data?.filter((obj) => obj.name === "admin")?.length > 0;

  const queryClient = useQueryClient();
  const initialValues = {
    user: isUser,
    admin: isAdmin,
  };

  const handleSubmit = async (values) => {
    const roles = [];
    if (values.user) roles.push("user");
    if (values.admin) roles.push("admin");

    console.log(values,roles);

    let method = POST;
    const args = {
      id,
      data: { roles },
    };
    try {
      await saveRoles({
        args,
        options: {
          method,
        },
      }).then(() => {
        toast.success("Rol actualizado.");
        queryClient.invalidateQueries([API_URLS_ROLES_LIST]);
        onClose();
      });
    } catch (error) {
      getErrorTransaction(error);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6">
              <CheckBoxField name="user" label="Usuario" disabled={isUser} />

              <CheckBoxField
                name="admin"
                label="Administrador"
                disabled={isAdmin}
              />
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                name={isSubmitting ? dictLoad : dictButtonAccept}
              />
              <ButtonCancel
                onClick={() => {
                  onClose();
                }}
                name={dictButtonCancel}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
