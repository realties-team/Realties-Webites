import { Xmark } from "@/assets";
import React from "react";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  children: React.ReactNode;
};

const RegistrationModal = ({ isVisible, onClose, children }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[700px] flex flex-col relative">
        <button
          className="text-black text-2xl absolute top-6 right-10   "
          onClick={() => onClose()}
        >
          X
        </button>

        <div className="bg-white p-2 rounded-2xl">{children}</div>
      </div>
    </div>
  );
};

export default RegistrationModal;
