import findUsersByKeycloack from "@/hooks/useFindByKeycloack";
import React, { useState } from "react";

export default function Profile({ userlogged, roles }) {
  const [hideRoles, setHideRoles] = useState(false);
  const { data, isLoading } = findUsersByKeycloack({
    args: { id: userlogged.id },
    options: {
      keepPreviousData: true,
    },
  });
  return (
    <div class="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="flex w-full justify-center px-4">
            <div class="relative">
              <img
                alt="..."
                src="/images.png"
                class="max-w-150-px absolute -m-16 -ml-20 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16"
              />
            </div>
          </div>
        </div>
        <div class="mt-12 text-center">
          <h3 class="text-blueGray-700 mb-2 mb-2 text-xl font-semibold leading-normal">
            {userlogged.username}
          </h3>
          <div class="text-blueGray-400 mt-0 mb-2 text-sm font-bold uppercase leading-normal">
            <i class="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>
            {userlogged.email}
          </div>
          <div class="text-blueGray-600 mb-2 mt-10">
            <i class="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i>
            {userlogged.firstName} - {userlogged.lastName} - {userlogged.id}
          </div>
        </div>
        {roles && (
          <div className="border-blueGray-200 mt-10 border-t py-10 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-9/12">
                <button
                  className="font-normal text-pink-500"
                  onClick={() => setHideRoles(!hideRoles)}
                >
                  {!hideRoles ? "Mostar Roles" : "Ocular Roles"}
                </button>
                {hideRoles && (
                  <div className="py-8">
                    <div className="mx-auto">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        {roles.map((field) => (
                          <div key={field} className="sm:col-span-1">
                            <dd className="text-gray-900 mt-1">{field}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
