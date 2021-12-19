import Modal from "react-modal";

interface newTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactioModal({ isOpen, onRequestClose }: newTransactionModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  )
};
