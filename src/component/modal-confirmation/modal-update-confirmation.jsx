/* eslint-disable react/prop-types */
import Modal from "../modal";
import React from "react";

export function ModalUpdate({ onOpen, open, onSubmit, message }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 content-center text-lg">{message}</div>
    </Modal>
  );
}
