import Modal from "../modal";
import deleteImages from "/images/eliminar_usuario/u226.svg";

export default function ModalDeleteRol
({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 flex flex-col items-center content-center text-xl">
        <a className="mb-5">¿Está seguro que desea desasignar este rol a este usuario?</a>
        
      </div>
    </Modal>
  );
}
