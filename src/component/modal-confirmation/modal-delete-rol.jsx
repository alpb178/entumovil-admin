import {Modal} from "../modal";

export function ModalDeleteRol({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 flex flex-col content-center items-center text-xl">
        <a className="mb-5">
          ¿Está seguro que desea desasignar este rol a este usuario?
        </a>
      </div>
    </Modal>
  );
}
