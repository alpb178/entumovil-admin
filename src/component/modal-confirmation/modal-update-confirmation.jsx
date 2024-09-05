/* eslint-disable react/prop-types */
import Modal from "../modal";
import React from "react";

export function ModalUpdate(props) {
  const { onOpen, open, onSubmit, message } = props;
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 content-center text-lg">{message}</div>
    </Modal>
  );
}
