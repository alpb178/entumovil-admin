/* eslint-disable react/prop-types */
import {Modal} from "../modal";
import React from "react";

export  function ModalLogout({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 flex flex-col content-center items-center text-xl">
        <a className="mb-5">¿Está seguro que desea cerrar sesión?</a>
      </div>
    </Modal>
  );
}
