
import Modal from "@/component/modal";
import React from "react";

export default function ProfileAdmin({ data, onOpen, open }) {
  return (
    <Modal formName="measure-unit" open={open} onOpen={onOpen}>
      <div className="mt- mx-auto">
      <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
          Keycloack Id:
          <i className="fas fa-map-marker-alt ml-3 text-gray ">
            {data.keyDoackId}
          </i>
        </div>
        <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
          Información Cuenta de Banco:
          <i className="fas fa-map-marker-alt ml-3 text-gray ">
            {data.cuentaBanco}
          </i>
        </div>
        <div className="text-blueGray-400 mt-0 mb-2  font-bold  leading-normal">
          Edad:
          <i className="fas fa-map-marker-alt ml-3 text-gray ">{data.edad}</i>
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
    </Modal>
  );
}
