import Modal from "../modal";
import imagesLogout from "/images/cerrar_sesion/u243.svg";

export default function ModalLogout({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 flex flex-col content-center items-center text-xl">
        <a className="mb-5">¿Está seguro que desea cerrar sesión?</a>
      </div>
    </Modal>
  );
}
