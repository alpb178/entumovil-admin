import Modal from "../modal";

export default function ModalUpdate({ onOpen, open, onSubmit }) {
  return (
    <Modal open={open} onOpen={onOpen} onSubmit={onSubmit}>
      <div className=" align-center m-10 content-center text-xl">{message}</div>
    </Modal>
  );
}
