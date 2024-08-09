/* eslint-disable react/prop-types */
import { Modal } from "../modal";
import React from "react";

export function ModalDelete({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 flex flex-col content-center items-center text-lg">
        <a className="mb-5">¿Está seguro que desea eliminar este usuario?</a>
      </div>
    </Modal>
  );
}
