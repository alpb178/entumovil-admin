import React, { useState } from "react";

export default function EditProfile({ userlogged, roles }) {
  const [hideRoles, setHideRoles] = useState(false);
  return (
    <div class="relative m-5 mt-16  flex w-full min-w-0 flex-col  bg-white">
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

        <div className="border-blueGray-200 mt-10 border-t py-10 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-9/12">
              <button
                className="font-normal text-pink-500"
                onClick={() => setHideRoles(!hideRoles)}
              >
                Editar Datos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
