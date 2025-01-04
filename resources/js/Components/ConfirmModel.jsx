// only yes or no question things

import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "./PrimaryButton";

export default function ConfirmModal({
  showDeleteModal,
  setShowDeleteModal,
  handleFunction,
  buttonType,
  btnName,
  confirmMsg
}) {
  return (
    <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
      <div className="p-6 space-y-4">
        <p className="text-lg font-semibold">
          {confirmMsg}
        </p>
        <div className="mt-4 flex justify-end space-x-4">
          <SecondaryButton onClick={() => setShowDeleteModal(false)}>
            Close
          </SecondaryButton>
          {buttonType === "danger" ? (
            <DangerButton onClick={handleFunction}>{btnName}</DangerButton>
          ) : (
            <PrimaryButton onClick={handleFunction} className="border border-white">
              {btnName}
            </PrimaryButton>
          )}
        </div>
      </div>
    </Modal>
  );
}
