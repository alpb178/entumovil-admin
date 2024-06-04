import { Modal } from "../modal";


export function ModalDelete({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 flex flex-col content-center items-center text-xl">
        <a className="mb-5">¿Está seguro que desea eliminar este usuario?</a>
      </div>
    </Modal>
  );
}
