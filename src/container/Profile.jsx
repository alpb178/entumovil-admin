import Loader from "@/component/loader";
import findUsersByKeycloack from "@/hooks/useFindByKeycloack";
import { useFindUsers } from "@/hooks/useUsers";
import React, { useState } from "react";

export default function Profile({ userlogged, roles }) {
  const [hideRoles, setHideRoles] = useState(false);
  const [hideExtraInfo, setInfoExtra] = useState(false);

  const { data, isLoading } = useFindUsers({
    args: { id: userlogged.id },
    options: {
      keepPreviousData: true,
    },
  });

  return (
    <div className="relative m-5 mt-16  flex w-full min-w-0 flex-col  bg-white">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="px-6 text-lg">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center px-4">
              <div className="relative">
                <img
                  alt="..."
                  src="/images.png"
                  className="max-w-150-px absolute -m-16 -ml-20 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16"
                />
              </div>
            </div>
          </div>
          <div className=" text-center border-b">
            <h3 className="text-blueGray-700 mb-2 font-semibold leading-normal">
              Usuario:
              <i className="fas fa-map-marker-alt ml-3 text-gray ">
                {userlogged.username}
              </i>
            </h3>
            <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
              Email:
              <i className="fas fa-map-marker-alt ml-3 text-gray ">
                {userlogged.email}
              </i>
            </div>
            <div className="mb-2 block font-bold">
              Nombre - Primer Apellido:
              <i className="fas fa-briefcase ml-3 text-gray ">
                {userlogged.firstName} - {userlogged.lastName}
              </i>
            </div>
          </div>
          
          <div className=" mt-10 flex  py-10 text-center sm:block md:block lg:flex">
            {roles && (
              <div className="flex w-1/2 flex-wrap justify-center md:w-full ">
                <div className="mb-3 w-full px-4 lg:w-9/12">
                  <button
                    className="font-normal text-pink-500"
                    onClick={() => setHideRoles(!hideRoles)}
                  >
                    {!hideRoles ? "Mostar Roles" : "Ocultar Roles"}
                  </button>
                  {hideRoles && (
                    <div className="mx-auto">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        {roles.map((field) => (
                          <div key={field} className="sm:col-span-1">
                            <dd className="text-gray-900 mt-1">{field}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex w-1/2  flex-wrap justify-center md:w-full">
              <div className="w-full px-4 lg:w-9/12">
                <button
                  className="mb-3 font-normal text-pink-500"
                  onClick={() => setInfoExtra(!hideExtraInfo)}
                >
                  {!hideExtraInfo
                    ? "Mostar Información Extra"
                    : "Ocultar Información Extra"}
                </button>
                {hideExtraInfo && (
                  <div className="mt- mx-auto">
                    <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
                      Información Cuenta de Banco:
                      <i className="fas fa-map-marker-alt ml-3 text-gray ">
                        {data.cuentaBanco}
                      </i>
                    </div>
                    <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
                      Edad:
                      <i className="fas fa-map-marker-alt ml-3 text-gray ">
                        {data.edad}
                      </i>
                    </div>
                    <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
                      Fecha de nacimiento:
                      <i className="fas fa-map-marker-alt ml-3 text-gray ">
                        {data.nacimiento}
                      </i>
                    </div>
                    <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
                      Ocupacion:
                      <i className="fas fa-map-marker-alt ml-3 text-gray ">
                        {data.ocupacion}
                      </i>
                    </div>
                    <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
                      Número de telefono:
                      <i className="fas fa-map-marker-alt ml-3 text-gray ">
                        {data.telefono}
                      </i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
