// only yes or no question things

import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "./PrimaryButton";

export default function ConfirmModal({
  show,
  setShow,
  handleFunction,
  buttonType,
  btnName,
  confirmMsg
}) {
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <div className="p-6 space-y-4">
        <p className="text-lg font-semibold">
          {confirmMsg}
        </p>
        <div className="mt-4 flex justify-end space-x-4">
          <SecondaryButton onClick={() => setShow(false)}>
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
