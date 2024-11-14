import React, { useEffect } from "react";
interface DialogCostum {
  open: boolean;
  title: string;
  onClose: () => void;
}
export const CostumDialog: React.FC<DialogCostum> = ({
  open,
  title,
  onClose,
}) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if ((event.target! as HTMLElement).id! === "modal-background") {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });

  if (!open) {
    return null;
  }
  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">This is a modal content.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
