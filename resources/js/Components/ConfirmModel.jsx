// only yes or no question things

import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "./PrimaryButton";

export default function ConfirmModal({
  showDeleteModal,
  setShowDeleteModal,
  handleDelete,
  buttonType,
  btnName
}) {
  return (
    <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
      <form onSubmit={handleDelete} className="p-6 space-y-4">
        <p className="text-lg font-semibold">
          Are you sure you want to delete this product?
        </p>
        <div className="mt-4 flex justify-end space-x-4">
          <SecondaryButton onClick={() => setShowDeleteModal(false)}>
            Close
          </SecondaryButton>
          {buttonType == "danger" ?
            <DangerButton type="submit">{btnName}</DangerButton>
            :
            <PrimaryButton type="submit" className="border border-white">{btnName}</PrimaryButton>}
        </div>
      </form>
    </Modal>
  );
}
