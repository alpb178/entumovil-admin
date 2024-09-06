/* eslint-disable react/prop-types */
import { Modal } from "../modal";
import React from "react";

export function ModalConfirmation(props) {
  const { message } = props;
  return (
    <Modal {...props}>
      <div className=" align-center m-10 flex flex-col content-center items-center text-lg">
        <a className="mb-5">
          {message}
        </a>
      </div>
    </Modal>
  );
}
