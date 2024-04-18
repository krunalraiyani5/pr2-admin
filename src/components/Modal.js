import React from "react";

const Modal = ({ isOpen, handleClose, title, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div
            className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="relative bg-white rounded-lg max-w-md w-full overflow-hidden">
            <div className="">
              <div className="p-3 px-5 bg-[#948BF4] flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <button onClick={handleClose} className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
